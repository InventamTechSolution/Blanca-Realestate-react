import React from "react";
import { Row, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import InputField from "../../components/common/InputField/InputField";
import TextArea from "../../components/common/TextArea/TextArea";

const IndividualFields = ({ control, errors, exclude = [] }) => {
  // CHANGE: extracted shared Individual fields to reuse in both Individual + Refer sections (no UI duplication).
  return (
    <>
      {/* CHANGE: add a bit more spacing between inputs */}
      <Row className="gx-4 gy-3 gy-lg-4">
        {exclude.includes("firstname") ? null : (
          <Col md={6}>
            <Controller
              name="firstname"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputField
                  label="Name *"
                  placeholder="Enter Name"
                  name={field?.name}
                  value={field?.value}
                  onChange={(e) => field?.onChange(e?.target?.value)}
                  required
                />
              )}
            />
            {errors?.firstname && (
              <p className="text-danger small mt-1 mb-1">
                {errors?.firstname?.message}
              </p>
            )}
          </Col>
        )}

        {exclude.includes("lastname") ? null : (
          <Col md={6}>
            <Controller
              name="lastname"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputField
                  label="Surname *"
                  placeholder="Enter Surname"
                  name={field?.name}
                  value={field?.value}
                  onChange={(e) => field?.onChange(e?.target?.value)}
                  required
                />
              )}
            />
            {errors?.lastname && (
              <p className="text-danger small mt-1 mb-1">
                {errors?.lastname?.message}
              </p>
            )}
          </Col>
        )}

        <Col md={6}>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputField
                label="Mobile Number *"
                placeholder="Enter Mobile Number"
                name={field?.name}
                value={field?.value}
                onChange={(e) => field?.onChange(e?.target?.value)}
                required
                // extra={<Button type="button" className="otp-btn">Send OTP</Button>}
              />
            )}
          />
          {errors?.phone && (
            <p className="text-danger small mt-1 mb-1">
              {errors?.phone?.message}
            </p>
          )}
        </Col>

        <Col md={6}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            }}
            render={({ field }) => (
              <InputField
                type="email"
                label="Email *"
                placeholder="Enter Email"
                name={field?.name}
                value={field?.value}
                onChange={(e) => field?.onChange(e?.target?.value)}
                required
              />
            )}
          />
          {errors?.email && (
            <p className="text-danger small mt-1 mb-1">
              {errors?.email?.message}
            </p>
          )}
        </Col>

        <Col md={12}>
          <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextArea
                label="Address *"
                placeholder="Enter Address"
                name={field?.name}
                value={field?.value}
                onChange={(e) => field?.onChange(e?.target?.value)}
                required
              />
            )}
          />
          {errors?.address && (
            <p className="text-danger small mt-1 mb-1">
              {errors?.address?.message}
            </p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default IndividualFields;
