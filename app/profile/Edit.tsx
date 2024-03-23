"use client"
import { useState } from "react"
import { toast } from "react-toastify"
import styles from "./Edit.module.css"
import Field from "@/components/formField/Field"
import Button from "@/components/formButton/Button"

export default function LoginForm() {
  const [gex, setGex] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
  }
  return (
    <>
      <div className={styles.edit}>
        <div className={styles.editHeader}>Profile</div>
        <div className={styles.editDesc}>Make sure to click save once done editing!</div>
        <form className={styles.editForm} onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.editFormRow}>
            <Field
              label="Name"
              id="name"
              name="name"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Pronouns"
              id="pronouns"
              name="pronouns"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Headline"
              id="headline"
              name="headline"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Industry"
              id="industry"
              name="industry"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Education"
              id="education"
              name="education"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="ACSI Education - Class of XXXX"
              id="acsEducation"
              name="acsEducation"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Experience"
              id="experience"
              name="experience"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Skills"
              id="skills"
              name="skills"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Current Location"
              id="location"
              name="location"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Website"
              id="website"
              name="website"
              type="text"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Phone Number"
              id="phone"
              name="phone"
              type="number"
              value={gex}
              onChange={setGex}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Button text="Save" />
          </div>
        </form>
      </div>
    </>
  )
}

function validateEmail(email: string) {
  return email?.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  );
}