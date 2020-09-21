export default function isEditor(props) {
  if (props?.location?.href) {
    return props.location.href.includes('.stackbit.dev');
  }
  throw new Error('No props provided to isEditor function');
}
