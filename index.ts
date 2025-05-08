import * as v from "valibot";

const userSchema = v.object({
  name: v.string(),
  age: v.number(),
});
type User = v.InferOutput<typeof userSchema>;

const user: unknown = {
  name: "John Doe",
  age: 30,
};

const result = v.safeParse(userSchema, user);

if (result.success) {
  const userData: User = result.output;
  console.log("User data is valid:", userData);
}
