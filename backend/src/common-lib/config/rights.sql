-- Create table rights if it doesn't exist

CREATE TABLE IF NOT EXISTS rights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table right_user if it doesn't exist
CREATE TABLE IF NOT EXISTS right_user (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    right_id UUID NOT NULL REFERENCES rights(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_right_user_user_id ON right_user(user_id);
CREATE INDEX IF NOT EXISTS idx_right_user_right_id ON right_user(right_id);

-- Unique constraint on right_user
CREATE UNIQUE INDEX IF NOT EXISTS idx_right_user_unique
ON right_user (user_id, right_id);

-- Insert default rights if they don't exist
INSERT INTO rights (name) VALUES
    ('ADMIN'),
    ('HUNT_MANAGER'),
    ('CULTURAL_CENTER_MANAGER')
ON CONFLICT (name) DO NOTHING;
