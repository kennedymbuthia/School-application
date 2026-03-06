INSERT INTO users (email, password_hash, role, first_name, last_name, phone)
VALUES (
    'admin@school.com',
    '$2b$10$v/pAXTgExHAZpA7SxZm.JuggFbsfYx2c3P5czPYGbTmknDi7lNkJq',
    'admin',
    'System',
    'Administrator',
    '+254700000000'
)
ON CONFLICT (email) DO NOTHING;

