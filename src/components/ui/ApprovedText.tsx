/** Render only the bold emphasis present in approved copy; never interpret HTML. */
export function ApprovedText({ text }: { text: string }) {
  return <>{text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index} className="font-semibold">{part.slice(2, -2)}</strong>
      : part,
  )}</>
}
