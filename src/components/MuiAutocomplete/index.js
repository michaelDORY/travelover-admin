import { useEffect, useState } from 'react';
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from 'react-google-places-autocomplete';

const MuiAutocomplete = (props) => {
  const [value, setValue] = useState(
    JSON.stringify(props.value) !== '{}' ? props.value : null,
  );
  useEffect(() => {
    if (value) {
      geocodeByPlaceId(value.value.place_id)
        .then((results) => {
          props.formik.setFieldValue('address', {
            description: value.label,
            location: {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            },
          });
        })
        .catch(() => null);
    }
  }, [value]);
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        apiOptions={{
          language: 'en',
          libraries: ['places', 'geometry'],
        }}
        selectProps={{
          theme: (theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: 'neutral20',
              primary: 'neutral20',
            },
          }),
          placeholder: props.placeholder,
          value: value,
          onChange: setValue,
          styles: {
            menu: (provided) => ({
              ...provided,
              background: 'rgb(91,91,91)',
              zIndex: 100000,
            }),
            input: (provided) => ({
              ...provided,
              color: 'white',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: 'white',
            }),
            control: (provided) => ({
              ...provided,
              background: 'transparent',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              paddingTop: '10px',
              paddingBottom: '10px',
              color: 'white',
            }),
          },
        }}
      />
    </div>
  );
};

export default MuiAutocomplete;
