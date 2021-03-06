CREATE TABLE images (
    id BIGSERIAL PRIMARY KEY,
    core_name VARCHAR NOT NULL,
    full_name VARCHAR NOT NULL,
    pixelated BOOLEAN default false
);

CREATE INDEX images_core_name ON images (core_name);
