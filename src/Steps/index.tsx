import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import { StepIconProps } from "@mui/material/StepIcon";
import FirstStepUseFormik from "./FirstStepUseFormik";
import SecondStepUseFormik from "./SecondStepUseFormik";
import ThirdStepUseFormik from "./ThirdStepUseFormik";
import dayjs, { Dayjs } from "dayjs";
import {
  IFirstStepSU,
  ISecondStepSU,
  ISignupValues,
  IThirdStepSU,
} from "../utils/interfaces/SignupInterface";
import { Form, Formik, useFormik, useFormikContext } from "formik";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [data, setData] = React.useState<ISignupValues | null>();
  const [value] = React.useState<number | null>(Date.now());

  const initValueForm: ISignupValues = {
    numberPhone: "",
    username: "",
    firstName: "",
    lastName: "",
    DOB: dayjs(),
    conditions: false,
    password: "",
    confirmPassword: "",
    position: "",
    timeSlots: [{ from: value, to: value }],
  };
  // const initValuesFirstStepSU: IFirstStepSU = {
  //   numberPhone: "",
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  //   DOB: dayjs(),
  //   conditions: false,
  // };
  // const initValuesSecondStepSU: ISecondStepSU = {
  //   password: "",
  //   confirmPassword: "",
  // };
  // const initValuesThirdStepSU: IThirdStepSU = {
  //   position: "",
  //   timeSlots: [{ from: value, to: value }],
  // };
  // const firstStepForm = useFormik({
  //   initialValues: initValuesFirstStepSU,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  // const secondStepForm = useFormik({
  //   initialValues: initValuesSecondStepSU,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  // const thirdStepForm = useFormik({
  //   initialValues: initValuesThirdStepSU,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  const steps = [
    {
      component: <FirstStepUseFormik />,
    },
    {
      component: <SecondStepUseFormik />,
    },
    {
      component: <ThirdStepUseFormik />,
    },
  ];

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    // steps[activeStep].form.submitForm();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submit = async () => {
    // const res = steps.reduce(
    //   (accumulator, crr) => ({ ...accumulator, ...crr.form.values }),
    //   {}
    // );

    try {
      const request = await new Promise((resolve) => {
        setTimeout(() => {
          // resolve("Yay");
          // alert(JSON.stringify(res, null, 2));
        }, 4000);
      });

      alert(request);
    } catch (err) {
      throw err;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box mb={2}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<QontoConnector />}
        >
          {steps.map((stepComponent, i) => (
            <Step key={i}>
              <StepLabel StepIconComponent={QontoStepIcon} />
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>
        <React.Fragment>
          <Formik
            initialValues={initValueForm}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ setFieldValue, setFieldTouched, values, errors, touched }) => (
              <Form>
                <Box>{steps[activeStep].component}</Box>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>

                  {activeStep !== steps.length - 1 ? (
                    <Button
                      onClick={() => {
                        console.log(values);
                        handleNext();
                      }}
                      sx={{ mr: 1 }}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button onClick={submit} variant="contained" sx={{ mr: 1 }}>
                      Submit
                    </Button>
                  )}
                </Box>
              </Form>
            )}
          </Formik>
        </React.Fragment>
      </div>
    </Box>
  );
}
