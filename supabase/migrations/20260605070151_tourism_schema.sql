-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles RLS policies
CREATE POLICY "profiles_select_authenticated"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR is_admin = true);

CREATE POLICY "profiles_insert_authenticated"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update_authenticated"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_delete_authenticated"
  ON profiles
  FOR DELETE
  TO authenticated
  USING (auth.uid() = id);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  state_id TEXT NOT NULL,
  destination_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on reviews
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Reviews RLS policies
CREATE POLICY "reviews_select_authenticated"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "reviews_insert_authenticated"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "reviews_update_authenticated"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "reviews_delete_authenticated"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create trips table
CREATE TABLE IF NOT EXISTS trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  states TEXT[] NOT NULL,
  budget TEXT NOT NULL,
  travelers INTEGER DEFAULT 1,
  notes TEXT,
  status TEXT DEFAULT 'planning',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on trips
ALTER TABLE trips ENABLE ROW LEVEL SECURITY;

-- Trips RLS policies
CREATE POLICY "trips_select_authenticated"
  ON trips
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "trips_insert_authenticated"
  ON trips
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "trips_update_authenticated"
  ON trips
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "trips_delete_authenticated"
  ON trips
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create trip_destinations table
CREATE TABLE IF NOT EXISTS trip_destinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id UUID NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  state_id TEXT NOT NULL,
  destination_name TEXT NOT NULL,
  visit_date DATE NOT NULL,
  notes TEXT,
  order_index INTEGER DEFAULT 0
);

-- Enable RLS on trip_destinations
ALTER TABLE trip_destinations ENABLE ROW LEVEL SECURITY;

-- Trip_destinations RLS policies
CREATE POLICY "trip_destinations_select_authenticated"
  ON trip_destinations
  FOR SELECT
  TO authenticated
  USING (
    trip_id IN (
      SELECT id FROM trips WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "trip_destinations_insert_authenticated"
  ON trip_destinations
  FOR INSERT
  TO authenticated
  WITH CHECK (
    trip_id IN (
      SELECT id FROM trips WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "trip_destinations_update_authenticated"
  ON trip_destinations
  FOR UPDATE
  TO authenticated
  USING (
    trip_id IN (
      SELECT id FROM trips WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    trip_id IN (
      SELECT id FROM trips WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "trip_destinations_delete_authenticated"
  ON trip_destinations
  FOR DELETE
  TO authenticated
  USING (
    trip_id IN (
      SELECT id FROM trips WHERE user_id = auth.uid()
    )
  );

-- Create saved_states table
CREATE TABLE IF NOT EXISTS saved_states (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  state_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, state_id)
);

-- Enable RLS on saved_states
ALTER TABLE saved_states ENABLE ROW LEVEL SECURITY;

-- Saved_states RLS policies
CREATE POLICY "saved_states_select_authenticated"
  ON saved_states
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "saved_states_insert_authenticated"
  ON saved_states
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "saved_states_update_authenticated"
  ON saved_states
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "saved_states_delete_authenticated"
  ON saved_states
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_reviews_state_id ON reviews(state_id);
CREATE INDEX idx_trips_user_id ON trips(user_id);
CREATE INDEX idx_trip_destinations_trip_id ON trip_destinations(trip_id);
CREATE INDEX idx_saved_states_user_id ON saved_states(user_id);
CREATE INDEX idx_saved_states_state_id ON saved_states(state_id);