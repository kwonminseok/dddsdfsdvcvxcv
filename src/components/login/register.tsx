import { Box, Flex, Text, Checkbox, Button, TextField, Label } from "@components/commons"
import { useForm, Path } from "react-hook-form"
import { useRouter } from "next/router"
import LogoMain from "@icons/logo-main"
import axios from "axios"
import { useRef } from "react"
interface IFormValues {
  email: string
  nickName: string
  age: boolean
  use: boolean
  privacy: boolean
}

type InputProps = {
  label: string
  register: any //UseFormRegister<IFormValues>
  value: Path<IFormValues>
  required: boolean
  rule?: {
    required?: string | boolean
    minLength?: {
      value: string
      message: string
    }
    pattern?: {
      value: any
      message: string
    }
  }
  error?: string
}

type TRegister = {
  userInfo: {
    email?: string
    provider?: string
    token?: string
  }
}

export function RegiInput({ label, register, required, value, rule, error, ...props }: InputProps) {
  return (
    <Box sx={{ width: "100%" }} mb="3">
      <Flex sx={{ fontSize: 1, lineHeight: "20px", mb: 1, ml: 1 }}>{label}</Flex>
      <TextField id={value} variant="line" boxProps={{ sx: { width: "100%" } }} {...props} {...register(value, rule)} />
    </Box>
  )
}

const Register = ({ userInfo, ...props }: TRegister) => {
  const router = useRouter()
  const initialValues = {
    email: userInfo?.email ? userInfo.email : "",
    nickName: "",
    age: false,
    use: false,
    privacy: false,
  }
  const emailRef = useRef(null)
  const nickRef = useRef(null)
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    setError,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialValues,
  })
  const onSubmit = async (data: any) => {
    console.log(data)
    console.log(errors)
    console.log({
      loginType: userInfo.provider,
      email: userInfo?.email,
      nickName: data.nickName,
      token: userInfo.token,
    })
    if (data.age && data.use && data.privacy) {
      try {
        const res = await axios.post("/api/users/register", {
          loginType: userInfo.provider as string,
          email: data.email,
          nickname: data.nickName,
          token: userInfo.token,
        })
        console.log(res)
        if (res.status == 200) {
          switch (res.data.message) {
            case "NICKNAME_ALREADY_EXIST": {
              setError("nickName", { type: "duplicated", message: "이미 존재하는 닉네임입니다." })
              break
            }
            case "USER_CREATED": {
              // 아이디 생성됨
              router.push("/")
              break
            }
            default: {
              break
            }
          }
        }
      } catch (e) {
        console.log(e)
        console.log("error 발")
      }
    }
    console.log(errors)
    //loginType: provider, email: email, nickName: data.nickName, token: token
  }
  const handleAllChecked = () => {
    const allchecked = getValues("age") && getValues("use") && getValues("privacy")
    if (allchecked) {
      setValue("age", false)
      setValue("use", false)
      setValue("privacy", false)
    } else {
      setValue("age", true)
      setValue("use", true)
      setValue("privacy", true)
    }
    trigger(["age", "use", "privacy"])
  }
  watch("age")
  watch("use")
  watch("privacy")
  return (
    <Box sx={{ mt: "160px", minWidth: "376px" }}>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          padding: 6,
        }}
      >
        {/* header */}
        <Flex pt="10" pb="4" align="center" justify="center">
          <Box ml={[16, 16, 20]} mr={[16, 16, 20]} sx={{ flex: "unset" }}>
            <LogoMain width="234px" />
          </Box>
        </Flex>
        <Box sx={{ width: "100%" }}>
          <Flex direction="column" align="center" mb="6">
            {/* main */}
            <Text>간편 로그인으로 1초만에 얻는</Text>
            <Text>나만의 영원한 디지털 뱃지</Text>
          </Flex>
          <Flex direction="column" align="center" mb="6" sx={{ width: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
              <RegiInput
                label="이메일"
                register={register}
                rule={{ required: true }}
                ref={emailRef}
                value="email"
                disabled
              />
              <RegiInput
                label="닉네임"
                register={register}
                error={errors.nickName?.type == "duplicated" && errors.nickName.message}
                rule={{ required: true }}
                required
                ref={nickRef}
                value="nickName"
              />
              <Box sx={{ mt: 4, pb: 3, borderBottom: "1px" }}>
                <Label sx={{ alignItems: "center" }}>
                  <Checkbox
                    checked={getValues("age") && getValues("use") && getValues("privacy")}
                    onChange={handleAllChecked}
                  />
                  <Text>모두 동의합니다</Text>
                </Label>
              </Box>
              <Flex direction="column" mt="4" mb="3">
                <Label sx={{ alignItems: "center", cursor: "pointer" }}>
                  <Checkbox checked={getValues("age")} {...register("age", { required: true })} />
                  <Text variant="p">만 14세 이상입니다 [필수]</Text>
                </Label>
                <Label sx={{ alignItems: "center", cursor: "pointer" }}>
                  <Checkbox checked={getValues("use")} {...register("use", { required: true })}></Checkbox>
                  <Text variant="p">마이뱃지 이용약관 동의 [필수]</Text>
                </Label>
                <Label sx={{ alignItems: "center", cursor: "pointer" }}>
                  <Checkbox checked={getValues("privacy")} {...register("privacy", { required: true })}></Checkbox>
                  <Text variant="p">개인정보 수집 및 이용 동의 [필수]</Text>
                </Label>
              </Flex>
              <Box pt="4" my="2">
                <Button type="submit" sx={{ width: "100%", py: 2 }} disabled={!isValid}>
                  {" "}
                  회원 가입하기
                </Button>
              </Box>
            </form>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Register
