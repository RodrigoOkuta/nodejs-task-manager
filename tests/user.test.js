const request = require("supertest");
const app = require("../src/app");

const User = require("../src/models/user");
const { userOneId, userOne, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Rodrigo",
      email: "rodrigo1.okuta@gmail.com",
      password: "123Mudar!@"
    })
    .expect(201);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assert about the response
  expect(response.body).toMatchObject({
    user: {
      name: "Rodrigo",
      email: "rodrigo1.okuta@gmail.com"
    },
    token: user.tokens[0].token
  });

  expect(user.password).not.toBe(userOne.password);
});

test("Should login existing users", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user).not.toBeNull();

  expect(response.body.token).toMatch(user.tokens[1].token);
});

test("Should login fail for wrong email", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "wrongemail@gmail.com",
      password: userOne.password
    })
    .expect(400);
});

test("Should login fail for wrong password", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "wrongPassword1@#"
    })
    .expect(400);
});

test("Should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not get profile for unauthenticated user", async () => {
  await request(app)
    .get("/users/me")
    .send()
    .expect(401);
});

test("Should delete user profile", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOneId);

  expect(user).toBeNull();
});

test("Should not delete unauthorized user", async () => {
  await request(app)
    .delete("/users/me")
    .send()
    .expect(401);
});

test("Should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set(`Authorization`, `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/profile-pic.jpg")
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("Should update valid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({ name: "Lucas" })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.name).toEqual("Lucas");
});

test("Should not update invalid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({ location: "Canada" })
    .expect(400);
});
