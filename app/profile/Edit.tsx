"use client"
import { useState } from "react"
import { toast } from "react-toastify"
import styles from "./Edit.module.css"
import Field from "@/components/formField/Field"
import Button from "@/components/formButton/Button"
import countries from "countries-list/minimal/countries.en.min.json"

export default function LoginForm() {
  const [data, setData] = useState({
    name: "",
    pronouns: "",
    headline: "",
    industry: "",
    education: "",
    acsEducation: "",
    experience: "",
    skills: "",
    location: "",
    website: "",
    phone: "",
  })

  const handleChange = (target: any) => {
    const { name, value } = target
    setData({
      ...data,
      [name]: value,
    })
    console.log(data)
  }

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
              value={data.name}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Pronouns"
              id="pronouns"
              name="pronouns"
              type="dropdown"
              value={data.pronouns}
              onChange={handleChange}
              required={false}
              options={{m: "He/Him", f: "She/Her", t: "They/Them", o: "Other"}}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Headline"
              id="headline"
              name="headline"
              type="text"
              value={data.headline}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Industry"
              id="industry"
              name="industry"
              type="text"
              value={data.industry}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Education"
              id="education"
              name="education"
              type="text"
              value={data.education}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Graduation Year from ACSI"
              id="acsEducation"
              name="acsEducation"
              type="number"
              value={data.acsEducation}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Experience"
              id="experience"
              name="experience"
              type="text"
              value={data.experience}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Skills"
              id="skills"
              name="skills"
              type="text"
              value={data.skills}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Current Location"
              id="location"
              name="location"
              type="dropdown"
              value={data.location}
              onChange={handleChange}
              required={false}
              options={countries}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Website"
              id="website"
              name="website"
              type="text"
              value={data.website}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.editFormRow}>
            <Field
              label="Phone Number"
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              onChange={handleChange}
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