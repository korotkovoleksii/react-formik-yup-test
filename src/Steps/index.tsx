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
import { ISignupValues } from "../utils/interfaces/SignupInterface";
import { Form, Formik, useFormik, useFormikContext } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import { arrayStepsSchemaValidation } from "../utils/validation/validationSchema";
//1)Validation for all fields

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
  const [loaidng, setLoading] = React.useState(false);
  const initValueForm: ISignupValues = {
    codeCountry: "",
    numberPhone: "",
    username: "",
    firstName: "",
    lastName: "",
    DOB: dayjs(),
    conditions: false,
    password: "",
    confirmPassword: "",
    position: "",
    timeSlots: [{ from: Date.now(), to: Date.now() }],
  };

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
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submit = async (values: ISignupValues) => {
    try {
      setLoading(true);
      const request = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(JSON.stringify(values, null, 2));
        }, 4000);
      });
      alert(request);
      setLoading(false);
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
            validationSchema={arrayStepsSchemaValidation[activeStep]}
            onSubmit={(values) => {
              if (!(steps.length - 1 === activeStep)) {
                handleNext();
              } else {
                submit(values);
              }
            }}
          >
            {({ submitForm }) => (
              <Box>
                <Box>{steps[activeStep].component}</Box>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={() => {
                      handleBack();
                    }}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>

                  {activeStep !== steps.length - 1 ? (
                    <Button
                      variant="text"
                      sx={{ mr: 1 }}
                      onClick={() => {
                        submitForm();
                      }}
                    >
                      Next
                    </Button>
                  ) : (
                    <LoadingButton
                      loading={loaidng}
                      variant="contained"
                      sx={{ mr: 1 }}
                      onClick={() => {
                        submitForm();
                      }}
                    >
                      Submit
                    </LoadingButton>
                  )}
                </Box>
              </Box>
            )}
          </Formik>
        </React.Fragment>
      </div>
    </Box>
  );
}
