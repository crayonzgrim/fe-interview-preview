import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({
    message: "올바른 이메일을 입력해주세요",
  }),
  password: z.string().min(3, {
    message: "최소 3자 이상 작성해주세요",
  }),
});

export const signupSchema = z.object({
  name: z.string().min(1, {
    message: "이름은 필수입니다!",
  }),
  email: z.string().email({
    message: "올바른 이메일을 입력해주세요",
  }),
  password: z.string().min(3, {
    message: "최소 3자 이상 작성해주세요",
  }),
});
