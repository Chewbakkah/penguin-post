<<<<<<< HEAD
INSERT INTO user(username, email, password)
VALUES ('hamilton', 'hamilton@mail.com', 'pass'), ('mario', 'mario@mail.com', 'pass'), ('cory', 'cory@mail.com', 'pass'), ('cheyne', 'cheyne@mail.com', 'pass');

INSERT INTO post (title, post_url, user_id)
VALUES ("First Post!", "https://user/post_1", 1),
    ("Second Post!", "https://user/post_2", 2),
    ("Third Post!", "https://user/post_3", 3),
    ("Fourth Post!", "https://user/post_4", 4);

INSERT INTO comment (comment_text, user_id, post_id)
VALUES
    ('SUPPPPPER GOOD POST', 1, 1),
    ('SUPPPPPER GOOOD POST', 1, 2),
    ('SUPPPPPER GOOOOD POST', 2, 1),
    ('SUPPPPPER GOOOOOD POST', 2, 2),
    ('SUPPPPPER GOOOOOOD POST', 3, 1),
    ('SUPPPPPER GOOOOOOOD POST', 3, 2),
    ('SUPPPPPER GOOOOOOOOOD POST', 4, 1),
    ('SUPPPPPER GOOOOOOOOOOD POST', 4, 2),
    ('SUPPPPPER GOOOOOOOOOOOD POST', 5, 1),
    ('SUPPPPPER GOOOOOOOOOOOOD POST', 5, 2);
=======
INSERT INTO User(username, email, password)
VALUES ('hamilton', 'hamilton@mail.com', 'pass'), ('mario', 'mario@mail.com', 'pass'), ('cory', 'cory@mail.com', 'pass'), ('cheyne', 'cheyne@mail.com', 'pass');

INSERT INTO Post (title, post_content, user_id)
VALUES ("First Post!", "first post content", 1),
    ("Second Post!", "second post content", 2),
    ("Third Post!", "third post content", 3),
    ("Fourth Post!", "fourth post content", 4),
    ("Fifth Post!", "fifth post content", 5);


>>>>>>> dev
