export default function isEditor(props) {
  if (!props?.location?.href || typeof document === 'undefined' || typeof window === 'undefined') {
    return true;
  }
  return props?.pageContext?.site?.siteMetadata?.MODE === 'editor';
}
