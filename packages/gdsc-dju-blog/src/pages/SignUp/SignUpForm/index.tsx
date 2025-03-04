import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import CheckIcon from '@assets/icons/CheckIcon';
import { useCheckNickname } from '@src/api/hooks/useCheckNickname';
import { useGetMyData } from '@src/api/hooks/useGetMyData';
import UserService from '@src/api/UserService';
import { GDSCButton } from '@src/components/atoms/Button';
import TextInput from '@src/components/atoms/input/TextInput';
import ValidationInput from '@src/components/atoms/input/ValidationInput';
import {
  FormElementWrapper,
  FormLabel,
  FormLabelWrapper,
} from '@src/components/layouts/ProfileEditLayout/styled';
import { formValidation } from '@src/components/Validation/profileEdit';

import { SignUpFormStyle, TextInputWrapper } from './styled';

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();
  const { myData } = useGetMyData();

  const onSubmit = async (values: any) => {
    const response = await UserService.updateMyData({ ...values });
    if (response.data.body.message === 'SUCCESS') {
      alert('회원가입이 완료되었습니다');
      navigate('/', { replace: true });
    } else alert('에러가 발생했습니다');
  };
  const formElements = Object.keys(formValidation) as Array<
    keyof typeof formValidation
  >;
  useEffect(() => {
    if (!myData) {
      return;
    }
    reset({
      id: myData.memberInfo.id,
      memberInfoId: myData.memberInfo.memberInfoId,
      generation: 0,
      birthday: '',
      positionType: 'Beginner',
    });
  }, [myData]);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { mutate, isError: isMutationError } = useCheckNickname(setIsSuccess);
  const validationCheck = () => {
    mutate(watch('nickname').trim());
  };
  useEffect(() => {
    setIsSuccess(false);
  }, [watch('nickname')]);

  const handleType = () => {
    if (isSuccess) return 'success';
    else if (isMutationError) return 'error';
    else return 'none';
  };

  return (
    <SignUpFormStyle>
      {formElements.map((element) => {
        const elementName = formValidation[element];
        return (
          <FormElementWrapper key={element}>
            <FormLabelWrapper>
              <FormLabel essential={!!elementName.required}>
                {elementName.label}
              </FormLabel>
              {elementName.isValidate && <CheckIcon type={handleType()} />}
            </FormLabelWrapper>
            {elementName.isValidate ? (
              <TextInputWrapper>
                <ValidationInput
                  disabled={elementName.isBlock}
                  error={errors[element]}
                  placeholder={elementName.placeholder}
                  {...register(element, {
                    ...elementName,
                    validate: (v) => isSuccess || '닉네임 검사가 필요합니다',
                  })}
                  validationCheck={validationCheck}
                  value={watch('nickname')}
                  isSuccess={isSuccess}
                />
              </TextInputWrapper>
            ) : (
              <TextInputWrapper>
                <TextInput
                  disabled={elementName.isBlock}
                  error={errors[element]}
                  placeholder={elementName.placeholder}
                  {...register(element, elementName)}
                />
              </TextInputWrapper>
            )}
          </FormElementWrapper>
        );
      })}
      <GDSCButton
        color={isValid ? 'blue900' : 'blue200'}
        text="가입하기"
        disable={!isValid}
        onClick={handleSubmit(onSubmit)}
      />
    </SignUpFormStyle>
  );
};

export default SignUpForm;
