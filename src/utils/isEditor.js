export default function isEditor(props) {
  return true;
  if (!props?.location?.href || typeof document === 'undefined' || typeof window === 'undefined') {
    return true;
  }
  return !props.location.href.startsWith('http://localhost');
  // return props.location.href.includes('.stackbit.dev');
}
