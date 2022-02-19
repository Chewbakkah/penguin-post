
INSERT INTO user(username, email, password)
VALUES ('hamilton', 'hamilton@mail.com', 'pass'), ('mario', 'mario@mail.com', 'pass'), ('cory', 'cory@mail.com', 'pass'), ('cheyne', 'cheyne@mail.com', 'pass');

INSERT INTO post (title, post_url, user_id)
VALUES ("First Post!", "https://user/post_1", 1),
    ("Second Post!", "https://user/post_2", 2),
    ("Third Post!", "https://user/post_3", 3),
    ("Fourth Post!", "https://user/post_4", 4);


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