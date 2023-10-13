import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import logo from "../images/logo.svg";
import {
  ActionButton,
  Button,
  ButtonContainer,
  CuisineType,
  CuisineTypesContainer,
  FormContainer,
  FormGroup,
  FormRow,
  Input,
  InterestEmoji,
  InterestItemNew,
  InterestName,
  InterestsContainerNew,
  Label,
  LanguageOption,
  LanguageRow,
  LanguageSelectorContainer,
  Loading,
  MainContent,
  Panel,
  PinButton,
  ResponseContainer,
  ResponseText,
  ResponseTitle,
  Select,
  Subtitle,
  Title,
  TopLocationContainer,
} from "../styles/styleComponents";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// const Main = ({ loading, response, handleSubmit, handleChange, email }) => (
//   <MainContent>
//     <Title>⭐️ Travel Planner ⭐️</Title>
//     {!response && <Subtitle>Fill the form to generate your itinerary</Subtitle>}

//     <ResponseContainer>
//       {loading ? <Loading /> : response && <ResponseData response={response} />}
//     </ResponseContainer>
//   </MainContent>
// );

const ResponseData = ({ response }) => {
  const [download, setDownload] = useState(false);
  return (
    <ResponseContainer>
      <ResponseTitle>
        <span role="img" aria-label="emoji"></span> Your travel plan is ready 🎉
      </ResponseTitle>
      <ButtonContainer>
        <ActionButton
          onClick={() => {
            setDownload(true);
            const pdfElement = document.getElementById("pdf-container");
            const pdfOptions = {
              margin: 10,
              filename: "Melody_Mocktail_Travel_Planner.pdf",
              image: { type: "jpeg", quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            };
            html2pdf(pdfElement, pdfOptions);
          }}
        >
          Download
        </ActionButton>
      </ButtonContainer>
      <ResponseText>
        <div id="pdf-container">
          {download && (
            <img
              src={logo}
              style={{ width: "50%", height: "50&" }}
              alt="Logo"
            />
          )}
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      </ResponseText>
    </ResponseContainer>
  );
};

const GenerateButton = ({ loading, onClick }) => (
  <Button onClick={onClick} disabled={loading}>
    {loading ? "Please wait..." : "Submit"}
  </Button>
);

const options = {
  travelStyles: [
    "Cultural",
    "Adventure",
    "Relaxation",
    "Beach",
    "City Break",
    "Road Trip",
    "Wildlife Safari",
    "Ski",
  ],
  interestsNew: [
    { name: "History", emoji: "🏛️" },
    { name: "Art", emoji: "🎨" },
    { name: "Food", emoji: "🍴" },
    { name: "Music", emoji: "🎵" },
    { name: "Nature", emoji: "🌳" },
    { name: "Sports", emoji: "⚽" },
    { name: "Photography", emoji: "📷" },
    { name: "Architecture", emoji: "🏰" },
    { name: "Literature", emoji: "📚" },
  ],

  interests: [
    "History",
    "Art",
    "Food",
    "Music",
    "Nature",
    "Sports",
    "Photography",
    "Architecture",
    "Literature",
  ],

  accommodationTypes: [
    "Hotel",
    "Boutique Hotel",
    "Hostel",
    "Resort",
    "Vacation Rental",
    "Camping",
    "Homestay",
    "Bed and Breakfast",
  ],
  activityTypes: [
    "Outdoor",
    "Sightseeing",
    "Shopping",
    "Nightlife",
    "Museums",
    "Theme Parks",
    "Water Sports",
    "Yoga and Wellness",
  ],
  cuisineTypes: [
    { name: "Traditional", emoji: "😋" },
    { name: "Japanese", emoji: "🍱" },
    { name: "Italian", emoji: "🍝" },
    { name: "American", emoji: "🍔" },
    { name: "Korean", emoji: "🍜" },
    { name: "Mexican", emoji: "🌮" },
    { name: "Thai", emoji: "🍲" },
    { name: "Turkish", emoji: "🥙" },
    { name: "Indian", emoji: "🍛" },
    { name: "French", emoji: "🥐" },
    { name: "Spanish", emoji: "🥘" },
    { name: "Greek", emoji: "🍗" },
    { name: "Chinese", emoji: "🥡" },
  ],

  languages: [
    { value: "en", label: "English", icon: "🇺🇸" },
    { value: "tr", label: "Türkçe", icon: "🇹🇷" },
    { value: "fr", label: "Français", icon: "🇫🇷" },
    { value: "es", label: "Español", icon: "🇪🇸" },
    { value: "de", label: "Deutsch", icon: "🇩🇪" },
    { value: "it", label: "Italiano", icon: "🇮🇹" },
    { value: "pt", label: "Português", icon: "🇵🇹" },
    { value: "ru", label: "Русский", icon: "🇷🇺" },
    { value: "ja", label: "日本語", icon: "🇯🇵" },
  ],
};

const topLocations = [
  { name: "Milano, Italy", value: "Milano/Italy" },
  { name: "Paris, France", value: "Paris/France" },
  { name: "Los Angeles, CA", value: "Los Angeles/California" },
  // add more top locations as needed
];

const defaultValues = {
  destinationCountry: "",
  budget: "250 USD",
  travelStyle: options.travelStyles[0],
  interestsNew: [],
  accommodationType: options.accommodationTypes[0],
  transportationType: "Bus",
  activityType: [options.activityTypes[0]],
  cuisineType: options.cuisineTypes[0],
  tripDuration: "3",
  language: options.languages[0].value,
};

const Forms = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [values, setValues] = useState(defaultValues);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedCuisineTypes, setSelectedCuisineTypes] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    options.languages[0]
  );

  const handleCuisineTypeClick = (cuisineType) => {
    if (selectedCuisineTypes.includes(cuisineType)) {
      setSelectedCuisineTypes(
        selectedCuisineTypes.filter((item) => item !== cuisineType)
      );
      setValues((prevState) => ({
        ...prevState,
        cuisineType: selectedCuisineTypes.filter(
          (item) => item !== cuisineType
        ),
      }));
    } else {
      if (selectedCuisineTypes.length >= 3) {
        setSelectedCuisineTypes((prevSelectedCuisineTypes) => {
          const newSelectedCuisineTypes = [
            ...prevSelectedCuisineTypes.slice(1),
            cuisineType,
          ];
          setValues((prevState) => ({
            ...prevState,
            cuisineType: newSelectedCuisineTypes,
          }));
          return newSelectedCuisineTypes;
        });
      } else {
        setSelectedCuisineTypes((prevSelectedCuisineTypes) => {
          const newSelectedCuisineTypes = [
            ...prevSelectedCuisineTypes,
            cuisineType,
          ];
          setValues((prevState) => ({
            ...prevState,
            cuisineType: newSelectedCuisineTypes,
          }));
          return newSelectedCuisineTypes;
        });
      }
    }
  };

  const handleInterestClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      if (selectedInterests.length >= 3) {
        setSelectedInterests((prevSelectedInterests) => {
          const newSelectedInterests = [
            ...prevSelectedInterests.slice(1),
            interest,
          ];
          setValues((prevState) => ({
            ...prevState,
            interestsNew: newSelectedInterests,
          }));
          return newSelectedInterests;
        });
      } else {
        setSelectedInterests((prevSelectedInterests) => {
          const newSelectedInterests = [...prevSelectedInterests, interest];
          setValues((prevState) => ({
            ...prevState,
            interestsNew: newSelectedInterests,
          }));
          return newSelectedInterests;
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLocationClick = (location) => {
    setValues((prevState) => ({
      ...prevState,
      destinationCountry: location.name,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setValues((prevState) => ({
      ...prevState,
      [name]: selectedOptions,
    }));
  };

  const handleLanguageClick = (option) => {
    setSelectedLanguage(option.value);

    setValues((prevState) => ({
      ...prevState,
      language: option.label,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let prompt = `Generate a personalized travel itinerary for a trip to ${values.destinationCountry} with a budget of ${values.budget}. The traveler is interested in a ${values.travelStyle} vacation and enjoys ${values.interestsNew}. They are looking for ${values.accommodationType} accommodations and prefer ${values.transportationType} transportation. The itinerary should include ${values.activityType} activities and ${values.cuisineType} dining options. Please provide a detailed itinerary with daily recommendations for ${values.tripDuration} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${values.language}. `;

    fetch("https://c4-na.altogic.com/e:6475be0dabbc561653803b17/travel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResponse(data.choices[0].message.content);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const [email, setEmail] = useState("");

  const handleLeadSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    fetch(
      "https://c4-na.altogic.com/e:6475be0dabbc561653803b17/travel",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    setEmail("");
  };

  const handleLeadChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <Panel>
      {response ? (
        <ResponseContainer>
          <ResponseData response={response} />
        </ResponseContainer>
      ) : (
        <FormContainer onSubmit={handleSubmit}>
          <Label htmlFor="destinationCountry">Destination Country</Label>
          <Input
            type="text"
            placeholder="e.g. San Francisco/USA, Paris/France, Istanbul/Turkey, etc."
            id="destinationCountry"
            name="destinationCountry"
            value={values.destinationCountry}
            onChange={handleChange}
            required
          />
          <TopLocationContainer>
            <Label htmlFor="topDestinations">🔥Top Destionations:</Label>
            {topLocations.map((location) => (
              <PinButton
                key={location.value}
                onClick={() => handleLocationClick(location)}
              >
                {location.name}
              </PinButton>
            ))}
          </TopLocationContainer>
          <FormRow>
            <FormGroup>
              <Label htmlFor="budget">
                Budget
                <p
                  style={{
                    display: "inline-block",
                    color: "#666",
                    fontSize: "16px",
                  }}
                >
                  (with currency)
                </p>
              </Label>
              <Input
                type="text"
                placeholder="e.g. $1000 USD, 1000 EUR, etc."
                id="budget"
                name="budget"
                value={values.budget}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="tripDuration">
                Trip Duration
                <p
                  style={{
                    display: "inline-block",
                    color: "#666",
                    fontSize: "16px",
                  }}
                >
                  (in days)
                </p>
              </Label>
              <Input
                type="number"
                id="tripDuration"
                name="tripDuration"
                value={values.tripDuration}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>
          <Label htmlFor="interests">Interests</Label>
          <InterestsContainerNew>
            {options.interestsNew.map((interest, index) => (
              <InterestItemNew
                key={index}
                className={
                  selectedInterests.includes(interest.name) ? "selected" : ""
                }
                onClick={() => {
                  handleInterestClick(interest.name);
                }}
                value={interest}
              >
                <InterestEmoji aria-label="emoji">
                  {interest.emoji}
                </InterestEmoji>
                <InterestName>{interest.name}</InterestName>
              </InterestItemNew>
            ))}
          </InterestsContainerNew>

          <FormRow>
            <FormGroup>
              <Label htmlFor="accommodationType">Accommodation</Label>
              <Select
                id="accommodationType"
                name="accommodationType"
                value={values.accommodationType}
                onChange={handleChange}
                style={{ height: "50px" }}
              >
                {options.accommodationTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="travelStyle">Travel Style</Label>
              <Select
                id="travelStyle"
                name="travelStyle"
                value={values.travelStyle}
                onChange={handleChange}
                style={{ height: "50px" }}
              >
                {options.travelStyles.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormGroup>
          </FormRow>

          <Label htmlFor="transportationType">
            Transportation Type
            <p
              style={{
                display: "inline-block",
                fontSize: "16px",

                color: "#666",
              }}
            >
              (e.g. car, train, bus, etc.)
            </p>
          </Label>
          <Input
            type="text"
            id="transportationType"
            name="transportationType"
            value={values.transportationType}
            onChange={handleChange}
            required
          />

          <Label htmlFor="activityType">
            Activity Type
            <p
              style={{
                display: "inline-block",
                fontSize: "16px",

                color: "#666",
              }}
            >
              (select multiple options)
            </p>
          </Label>
          <Select
            id="activityType"
            name="activityType"
            multiple
            value={values.activityType}
            onChange={handleMultiSelectChange}
          >
            {options.activityTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Label htmlFor="cuisineType">Cuisine Type</Label>
          <CuisineTypesContainer>
            {options.cuisineTypes.map((cuisineType) => (
              <CuisineType
                multiple
                value={values.cuisineType}
                onChange={handleMultiSelectChange}
                key={cuisineType.name}
                className={
                  selectedCuisineTypes.includes(cuisineType.name)
                    ? "selected"
                    : ""
                }
                onClick={() => {
                  handleCuisineTypeClick(cuisineType.name);
                }}
              >
                <span role="img" aria-label={cuisineType.name}>
                  {cuisineType.emoji}
                </span>

                <br />

                <span>{cuisineType.name}</span>
              </CuisineType>
            ))}
          </CuisineTypesContainer>

          <LanguageSelectorContainer>
            <Label>Language</Label>
            <LanguageRow>
              {options.languages.map((option) => (
                <LanguageOption
                  key={option.value}
                  onClick={() => {
                    handleLanguageClick(option);
                  }}
                  value={values.language}
                  className={
                    selectedLanguage === option.value ? "selected" : ""
                  }
                >
                  <span
                    style={{ fontSize: "2rem" }}
                    role="img"
                    aria-label={option.label}
                  >
                    {option.icon}
                  </span>
                </LanguageOption>
              ))}
            </LanguageRow>
          </LanguageSelectorContainer>
          <GenerateButton
            loading={loading}
            type="submit"
            disabled={loading}
            className={loading ? "loading" : ""}
          ></GenerateButton>
        </FormContainer>
      )}
    </Panel>
  );
};

export default Forms;
