export default function isEditor(props) {
  console.log(JSON.stringify(props), window, document);
  if (typeof window === 'undefined') return true;
  if (props?.location?.href) {
    return props.location.href.includes('.stackbit.dev');
  }
  throw new Error('No props provided to isEditor function');
}
