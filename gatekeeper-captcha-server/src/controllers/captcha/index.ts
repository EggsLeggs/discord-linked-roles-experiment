import { Request, Response } from "express";
import { User } from "../../database/schemas/User";
import { verifyCaptchaService, updateUserMetadata } from "../../services/captcha";

export async function verifyCaptcha(req: Request, res: Response) {
  const userEntry = req.user as User;
  try {
    // http://localhost:3001/api/captcha/verify?captcha=03AD1IbLBHmgy1ujkTSVAFEGC_V2wpnUS_YonS0DvbXi7C5U9Kcgo4dGeSuWVIM5TKKEmOUM0JFz8bNsMMVo7au8eEcKutfqdnIH0x3wtuikZWTQE2U9aDFpiqidPbhyaBLowioF1Z_u9sMRXhVZh1R5bn2dhANn923PrM_3V-9oRHOFSpSCuDQ_dFzwx6WffjMZsAYL09gDxGlV0X6Tdk16h1xVIm9zRhTWde8EOP509RUpQUWDEabHUfpNT_43DDo4PU0QI8bvHRpRAw9m-iK7uQqryxOuhQF7un_8jcjDkxbL2XXfDUsVR73hvPdr2gjRr4DrnlFJxcsais9j67BpvCMe4W4C4a6K8c6YSDIrVi5BPidBG5LnDR_RFza9J2a-Nf-CkeYmgMzPLgTZOOoHqt0qegwWVTvlEXmW99O39l15yppk67HSJkUWQctdZW5j1odZtQQBZrbr-051O3Y-5rWkbij9iPFp_knxd88OrTOz7bqnwsAITWPI8JMcGpFihYyVQmy67i
    // use query string to pass captcha code as a string
    const captchaCode = req.query.captcha as string;
    const { data: success } = await verifyCaptchaService(
      userEntry.id,
      captchaCode
    );
    if (success.success) {
      const {data: response} = await updateUserMetadata(userEntry.id)
    }
    res.send(success.success);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}
