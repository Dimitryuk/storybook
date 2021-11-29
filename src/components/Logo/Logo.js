export default function Logo({ imageUrl, alt = "" }) {
  return <img src={imageUrl} alt={alt} />;
}
