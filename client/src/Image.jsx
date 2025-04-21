export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'https://booking-app-fdsm.onrender.com/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }
