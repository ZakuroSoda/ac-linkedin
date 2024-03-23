import styles from "./Field.module.css"

/**
 * @param {onChange} onChange - Takes in event.target and handles the change in parent component
 */

export default function Field({
  label, id, name, type, value, onChange, required, options
}: {
  label: string,
  id: string,
  name: string,
  type: string,
  value: string,
  onChange: any,
  required: boolean,
  options?: { [key: string]: string }
}) {
  if (type === "dropdown") return (
    <>
      <div className={styles.parent}>
        <select
          className={styles.field}
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target)}
          required={required}
        >
          {options && Object.keys(options).map((key) => (
            <option key={key} value={key}>{options[key]}</option>
          ))}
        </select>
        <label className={styles.fieldLabel} htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  )
  else return (
    <>
      <div className={styles.parent}>
        <input
          className={styles.field}
          type={type}
          id={id}
          name={name}
          placeholder=" "
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target)}
          required={required}
        />
        <label className={styles.fieldLabel} htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  )
}