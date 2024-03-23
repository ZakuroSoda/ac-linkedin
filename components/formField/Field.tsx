import styles from "./Field.module.css"

export default function Field({
  label, id, name, type, value, onChange, required
}: {
  label: string,
  id: string,
  name: string,
  type: string,
  value: string,
  onChange: any,
  required: boolean
}) {
  return (
    <>
      <input
        className={styles.field}
        type={type}
        id={id}
        name={name}
        placeholder=" "
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
      <label className={styles.fieldLabel} htmlFor={id}>
        {label}
      </label>
    </>
  )
}