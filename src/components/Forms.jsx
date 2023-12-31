import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import logo from "../images/banner.png";
import Select,{StylesConfig,components} from "react-select";
import {
  ActionButton,
  Button,
  ButtonContainer,
  CuisineType,
  CuisineTypesContainer,
  FormContainer,
  FormRow,
  Input,
  InterestEmoji,
  InterestItemNew,
  InterestName,
  InterestsContainerNew,
  Label,
  Panel,
  PinButton,
  ResponseContainer,
  ResponseText,
  ResponseTitle,
  TopLocationContainer,
  FormBlockGroup,
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
        {/* <ActionButton onClick={window.location.reload()}>Generate New Plan</ActionButton> */}
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton onClick={()=> window.location.reload()} >
          Generate New Itinerary
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
    { value: "Cultural", label: "Cultural" },
    { value: "Adventure", label: "Adventure" },
    { value: "Relaxation", label: "Relaxation" },
    { value: "Beach", label: "Beach" },
    { value: "City Break", label: "City Break" },
    { value: "Road Trip", label: "Road Trip" },
    { value: "Wildlife Safari", label: "Wildlife Safari" },
    { value: "Ski", label: "Ski" },
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
  {value: 'Hotel', label: 'Hotel'}, 
  {value: 'Boutique Hotel', label: 'Boutique Hotel'},
  {value: 'Hostel', label: 'Hostel'},
  {value: 'Resort', label: 'Resort'}, 
  {value: 'Vacation Rental', label: 'Vacation Rental'},
  {value: 'Camping', label: 'Camping'},
  {value: 'Homestay', label: 'Homestay'},
  {value: 'Bed and Breakfast', label: 'Bed and Breakfast'}
  ],
  activityTypes: [
  { value: 'Outdoor', label: 'Outdoor' },
  { value: 'Sightseeing', label: 'Sightseeing' },
  { value: 'Shopping', label: 'Shopping' },
  { value: 'Nightlife', label: 'Nightlife' },
  { value: 'Museums', label: 'Museums' },
  { value: 'Theme Parks', label: 'Theme Parks' },
  { value: 'Water Sports', label: 'Water Sports' },
  { value: 'Yoga and Wellness', label: 'Yoga and Wellness' },
  ],

  travelParties:[
  { value: 'Single', label: 'Single' },
  { value: 'Couple', label: 'Couple' },
  { value: 'Friends', label: 'Friends' },
  { value: 'Family', label: 'Family' }
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
transportatioinTypes:[
  { value: 'Bike', label: 'Bike' },
{ value: 'Bus', label: 'Bus' },
{ value: 'Car', label: 'Car' },
{ value: 'Flight', label: 'Flight' }
],
  currencies: [
{ value: 'AUD', label: 'AUD' },
{ value: 'BRL', label: 'BRL' },
{ value: 'CAD', label: 'CAD' },
{ value: 'CHF', label: 'CHF' },
{ value: 'CNY', label: 'CNY' },
{ value: 'EUR', label: 'EUR' },
{ value: 'GBP', label: 'GBP' },
{ value: 'HKD', label: 'HKD' },
{ value: 'INR', label: 'INR' },
{ value: 'JPY', label: 'JPY' },
{ value: 'KRW', label: 'KRW' },
{ value: 'MXN', label: 'MXN' },
{ value: 'NZD', label: 'NZD' },
{ value: 'RUB', label: 'RUB' },
{ value: 'SEK', label: 'SEK' },
{ value: 'SGD', label: 'SGD' },
{ value: 'USD', label: 'USD' },
{ value: 'ZAR', label: 'ZAR' }

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
  fromCountry: "",
  destinationCountry: "",
  budget: "",
  travelStyle: [],
  interestsNew: [],
  accommodationType: [],
  transportationType: [],
  activityType: "",
  cuisineType: options.cuisineTypes[0],
  tripDuration: "3",
  language: options.languages[0].value,
  travelParties:"",
  fromDate:"",
  toDate:"",
  currency:"USD"
};

const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex "
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" checked={isSelected} />
      {children}
    </components.Option>
  );
};
const Forms = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [values, setValues] = useState(defaultValues);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedCuisineTypes, setSelectedCuisineTypes] = useState([]);

  const retreiveValues = (arr) =>{
    console.log(arr)
    if(arr.length > 0){
      const a = []
      arr.forEach((b) => a.push(b.value))
      return a.join(',')
    }
    return ""
  }

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

  const handleChangeCurrencies = (value)=>{
  setValues((prevState)=>({
      ...prevState,
      "currency":value
    }))
  }


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

  const calculateDate = (fromDate, todate) =>{
    let date1 = new Date(fromDate); 
    let date2 = new Date(todate); 
      
    // To calculate the time difference of two dates 
    let Difference_In_Time = date2.getTime() - date1.getTime(); 
      
    // To calculate the no. of days between two dates 
    return Difference_In_Time / (1000 * 3600 * 24) + 1; 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let prompt = `Generate a personalized travel itinerary for a trip to ${values.destinationCountry} with a budget of ${values.budget}${values.currency.value}. The traveler is interested in a ${retreiveValues(values.travelStyle)} vacation and enjoys ${values.interestsNew}. They are looking for ${retreiveValues(values.accommodationType)} accommodations and prefer ${retreiveValues(values.transportationType)} transportation. The itinerary should include ${retreiveValues(values.activityType)} activities and ${values.cuisineType} dining options.The traveler parties are ${retreiveValues(values.travelParties)}. Please provide a detailed itinerary with daily recommendations for ${calculateDate(values.fromDate, values.toDate)} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${values.language}.`
    if(values.fromCountry !== ""){
       prompt = `Generate a personalized travel itinerary for a trip from ${values.fromCountry} to ${values.destinationCountry} with a budget of ${values.budget}${values.currency.value}. The traveler is interested in a ${retreiveValues(values.travelStyle)} vacation and enjoys ${values.interestsNew}. They are looking for ${retreiveValues(values.accommodationType)} accommodations and prefer ${retreiveValues(values.transportationType)} transportation. The itinerary should include ${retreiveValues(values.activityType)} activities and ${values.cuisineType} dining options.The traveler parties are ${retreiveValues(values.travelParties)}. Please provide a detailed itinerary with daily recommendations for ${calculateDate(values.fromDate, values.toDate)} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${values.language}.`
    }
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
        window.scroll(0,0)
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

  const colourStyles: StylesConfig = {
  control: (styles) => ({ ...styles,borderRadius:"5px",margin:"5px",flex:1}),}
  return (
    <Panel>
      <div >
      <img src={logo}  width={150} height={70} alt="Melody Mocktail"/>
      </div>
      {response ? (
        <ResponseContainer>
          <ResponseData response={response} />
        </ResponseContainer>
      ) : (
        <div>
        <FormContainer>
          <FormRow>
           <FormBlockGroup>
          <Label htmlFor="fromCountry">From Country(Optional)</Label>
          <Input
            type="text"
            placeholder="e.g. San Francisco, Paris, Istanbul etc."
            id="fromCountry"
            name="fromCountry"
            value={values.fromCountry}
            onChange={handleChange}
          />
          </FormBlockGroup>
         <FormBlockGroup>
          <Label htmlFor="destinationCountry">Destination Country</Label>
          <Input
            type="text"
            placeholder="e.g. San Francisco, Paris,France, Istanbul,Turkey, etc."
            id="destinationCountry"
            name="destinationCountry"
            value={values.destinationCountry}
            onChange={handleChange}
            required
          />

           </FormBlockGroup>
                  <FormBlockGroup>
              <Label htmlFor="tripDuration">
                From Date
              </Label>
              <Input
                placeholder="DD/MM/YYYY"
                type="date"
                id="fromDate"
                name="fromDate"
                value={values.fromDate}
                onChange={handleChange}
                required
              />
              </FormBlockGroup>
                <FormBlockGroup>
                <Label htmlFor="tripDuration">
                To Date
           
              </Label>
              <Input
              placeholder="DD/MM/YYYY"
                type="date"
                id="toDate"
                name="toDate"
                value={values.toDate}
                onChange={handleChange}
                required
              />
              </FormBlockGroup>

          </FormRow>
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
            <FormBlockGroup>
              <Label htmlFor="budget">
                Budget
              </Label>
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                   <Input
                style={{marginTop:"5px",flex:2}}
                type="text"
                placeholder="e.g. $1000 USD, 1000 EUR, etc."
                id="budget"
                name="budget"
                value={values.budget}
                onChange={handleChange}
                required
              />
              <Select
                id="currencies"
                name="currencies"
                defaultInputValue="USD"
                options={options.currencies}
                onChange={handleChangeCurrencies}
                styles={colourStyles}
              />
              </div>
              </FormBlockGroup>
            
            <FormBlockGroup>
              <Label htmlFor="accommodationType">Accommodation</Label>
                <Select
                  isMulti
                  id="travelStyle"
                  name="travelStyle"
                  defaultValue={[]}
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={(options) => {
                    if (Array.isArray(options)) {
                      let value = options.map((opt)=> opt.value)
                     setValues((prevState) => ({
                        ...prevState,
                        "accommodationType":value
                      }))
                    }
                  }}
                  styles={colourStyles}
                  options={options.accommodationTypes}
                  components={{
                    Option: InputOption
                  }}
                />
            
            </FormBlockGroup>
            <FormBlockGroup>
              <Label htmlFor="travelStyle">Travel Style</Label>
               <Select
                  defaultValue={[]}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={(options) => {
                    if (Array.isArray(options)) {
                      setValues((prevState)=>({
                        ...prevState,
                        "travelStyle":options.map((opt)=> opt.value)
                      }))
                    }
                  }}
                    styles={colourStyles}
                  options={options.travelStyles}
                  components={{
                    Option: InputOption
                  }}
                />
            </FormBlockGroup>
          </FormRow>
          <Label style={{marginTop:"10px"}} htmlFor="interests">Interests</Label>
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
            <FormBlockGroup>
            <Label htmlFor="transportationType">
            Transportation Type
         
          </Label>
             <Select
                 id="transportatioinTypes"
                  name="transportatioinTypes"
                  defaultValue={[]}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={(options) => {
                    if (Array.isArray(options)) {
                      let value = options.map((opt)=> opt.value)
                       setValues((prevState)=>({
                        ...prevState,
                        "transportationType":value
                      }))
                    }
                  }}
                  styles={colourStyles}
                  options={options.transportatioinTypes}
                  components={{
                    Option: InputOption
                  }}
                />
            </FormBlockGroup>
            <FormBlockGroup >
                <Label htmlFor="travelStyle">Travel Parties</Label>
                <Select
                  id="travelParties"
                  name="travelParties"
                  defaultValue={[]}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={(options) => {
                    if (Array.isArray(options)) {
                      let value = options.map((opt)=> opt.value)
                         setValues((prevState)=>({
                          ...prevState,
                          "travelParties":value
                        }))
                    }
                  }}
                  styles={colourStyles}
                  options={options.travelParties}
                  components={{
                    Option: InputOption
                  }}
                />
       
            </FormBlockGroup>
            <FormBlockGroup>

          <Label htmlFor="activityType">
            Activity Type
          </Label>
               <Select
                  id="activityType"
                name="activityType"
                  defaultValue={[]}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={(options) => {
                    if (Array.isArray(options)) {
                      let value = options.map((opt)=> opt.value)
                          setValues((prevState)=>({
                          ...prevState,
                          "activityType":value
                        }))
                    }
                  }}
                  styles={colourStyles}
                   options={options.activityTypes}
                  components={{
                    Option: InputOption
                  }}
                />
            </FormBlockGroup>
          </FormRow>
          <Label style={{marginTop:"10px"}} htmlFor="cuisineType">Cuisine Type</Label>
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

          {/* <LanguageSelectorContainer>
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
          </LanguageSelectorContainer> */}
        </FormContainer>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-20px"}}>
          <GenerateButton
            loading={loading}
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className={loading ? "loading" : ""}
          ></GenerateButton>
        </div>
        </div>
      )}
    </Panel>
  );
};

export default Forms;
