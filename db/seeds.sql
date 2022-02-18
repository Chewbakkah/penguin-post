
INSERT INTO user(username, email, password)
VALUES ('hamilton', 'hamilton@mail.com', 'pass'), ('mario', 'mario@mail.com', 'pass'), ('cory', 'cory@mail.com', 'pass'), ('cheyne', 'cheyne@mail.com', 'pass');

INSERT INTO post (title, post_url, user_id, created_at, updated_at)
VALUES ("First Post!", "https://user/post_1", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Second Post!", "https://user/post_2", 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Third Post!", "https://user/post_3", 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Fourth Post!", "https://user/post_4", 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO comment (comment_text, user_id, post_id)
VALUES
    ('SUPPPPPER GOOD POST', 1, 6),
    ('SUPPPPPER GOOOD POST', 1, 6),
    ('SUPPPPPER GOOOOD POST', 2, 7),
    ('SUPPPPPER GOOOOOD POST', 2, 7),
    ('SUPPPPPER GOOOOOOD POST', 3, 8),
    ('SUPPPPPER GOOOOOOOD POST', 3, 8),
    ('SUPPPPPER GOOOOOOOOOD POST', 4, 9),
    ('SUPPPPPER GOOOOOOOOOOD POST', 4, 9);