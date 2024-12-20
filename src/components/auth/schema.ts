import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({
    message: "올바른 이메일을 입력해주세요",
  }),
  password: z.string().min(3, {
    message: "최소 3자 이상 작성해주세요",
  }),
});
