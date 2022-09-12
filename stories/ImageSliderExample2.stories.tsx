import React, { useState, useRef, useEffect } from 'react';
import { Meta, Story } from '@storybook/react';
import { ImageFetcherSlider } from '../src/SlideShow/ImageFetcherSlider';
import { AppModeProvider } from '../src/context';
import { SearchBtn } from '../src/SearchBtn';
import { ImageFetcher } from '../src/ImageFetcher';

const imageSliderExampleStory: Meta = {
  title: 'Image-Slider',
  component: ImageFetcherSlider,
};

export default imageSliderExampleStory;

const items = [
  {
    valid_scientific_name: 'Poa alpina',
    observed_scientific_name: 'Poa alpina',
    vernacular_en: 'alpine bluegrass',
    vernacular_fr: 'pâturin alpin',
  },
  {
    valid_scientific_name: 'Arctostaphylos alpinus',
    observed_scientific_name: 'Arctous alpina',
    vernacular_en: 'alpine bearberry',
    vernacular_fr: 'busserole alpine',
  },
  {
    valid_scientific_name: 'Heracleum mantegazzianum',
    observed_scientific_name: 'Heracleum mantegazzianum',
    vernacular_en: 'giant hogweed',
    vernacular_fr: 'berce de mantegazzi',
  },
  {
    valid_scientific_name: 'Andreaea rupestris',
    observed_scientific_name: 'Andreaea alpestris',
    vernacular_en: 'slender rock-moss',
    vernacular_fr: 'petrophile des alpes',
  },
];

// object use ti mock the respose for dataProvider calls
const response = {
  'Poa alpina': {
    card: {
      title: 'Poa alpina',
      subtitle: '7 obs',
      leftText: 'pâturin alpin',
      rightText: 'alpine bluegrass',
    },
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Poa_alpina_Hintereggeralm.jpg',
      thumburl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Poa_alpina_Hintereggeralm.jpg/500px-Poa_alpina_Hintereggeralm.jpg',
      comment:
        "{{Information|\n|Description= '''''Poa alpina''''', Hintereggeralm ~ 1300 m, Styria, Austria\n|Source=Own work\n|Date=15. Juni 2006\n|Author=[[User:Tigerente]]\n|Permission=Own work, attribution required (Multi-license with GFDL and Creative Commons CC-BY 2.5)",
      name: 'Poa alpina',
      height: 2272,
      width: 1704,
    },
  },
  'Arctostaphylos alpinus': {
    card: {
      title: 'Arctostaphylos alpinus',
      subtitle: '113 obs',
      leftText: 'busserole alpine',
      rightText: 'alpine bearberry',
    },
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Alpine_bearberry_in_Varrio_Nature_Reserve%2C_Finland.jpg',
      thumburl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Alpine_bearberry_in_Varrio_Nature_Reserve%2C_Finland.jpg/500px-Alpine_bearberry_in_Varrio_Nature_Reserve%2C_Finland.jpg',
      comment:
        'Alpine bearberry (Arctostaphylos alpinus) maturing in old Scots pine forest of Varrio Nature Reserve, Salla, Finland. Date 4 August 2005\n\nSource: taken by user (Veli Pohjonen)\n\n{{cc-by-2.0}}\n[[Category:Outdoors]][[Category:Varrio]][[Category:plants]]\\',
      name: 'Arctostaphylos alpinus',
      height: 1303,
      width: 1363,
    },
  },
  'Heracleum mantegazzianum': {
    card: {
      title: 'Heracleum mantegazzianum',
      subtitle: '488 obs',
      leftText: 'berce de mantegazzi',
      rightText: 'giant hogweed',
    },
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Rbk_dolde.jpg',
      thumburl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rbk_dolde.jpg/500px-Rbk_dolde.jpg',
      comment:
        "*Beschreibung: ''[[Heracleum mantegazzianum]]'', Hauptdolde mit Nebendolden\n*Quelle: selbst fotografiert von [[:de:Benutzer:Appaloosa|Appaloosa]]\n*Erstversion: de.wikipedia ''15:20, 20. Jun 2005 . . Appaloosa (380788 Byte) (Hauptdolde mit Nebendolden Quel",
      name: 'Heracleum mantegazzianum',
      height: 1048,
      width: 1222,
    },
  },
  'Andreaea rupestris': {
    card: {
      title: 'Andreaea rupestris',
      subtitle: '0 obs',
      leftText: 'petrophile des alpes',
      rightText: 'slender rock-moss',
    },
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Andreaea_rupestris_%28a%2C_141109-472338%29_9773.JPG',
      thumburl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Andreaea_rupestris_%28a%2C_141109-472338%29_9773.JPG/500px-Andreaea_rupestris_%28a%2C_141109-472338%29_9773.JPG',
      comment:
        '{{Information\n|Description    ={{en|1=Andreaea rupestris}}\n{{de|1=Andreaea rupestris, Stein-Klaffmoos}}\n|Source         ={{own}}\n|Author         =[[User:HermannSchachner|HermannSchachner]]\n|Date           =2010-10-11\n|Permission     =\n|other_versions =\n}}',
      name: 'Andreaea rupestris',
      height: 1880,
      width: 2816,
    },
  },
};

// first state for the slider , it contains a card and image=undefine
const initialState = {
  card: {
    title: 'none',
    subtitle: `0 obs`,
    leftText: 'none',
    rightText: 'none',
  },
  image: undefined,
};

// function that retrives the data for a specific card
// in our case we call and api for species pictures based on its valid_scientific_name
// but the function could be define as need always respecting the response format
// response format:
/*
response ={
            card: {
            title: string,
            subtitle: string,
            leftText: string,
            rightText: string,
            },
            image: {
              name:string,
              url:string, 
              thumburl:string,
              width:number,
              height:number
            },
          };*/

const dataProvider = async (params: any) =>
  Promise.resolve(response[params.valid_scientific_name]);

const imageFetcherSearchFn = (params: any) => 0;

const Template: Story<any> = (args) => {
  const { items, searchBtn } = args;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <AppModeProvider>
        <div style={{ width: '250px' }}>
          <ImageFetcher
            height="200px"
            items={items}
            dataProvider={dataProvider}
            searchFn={imageFetcherSearchFn}
          />
        </div>
      </AppModeProvider>
    </div>
  );
};

//const onSearch = (params) => imageFetcherSearchFn(params);

const Props = {
  t: (value: string) => value,
  items: items,
};

export const ImageSliderExample2Template = Template.bind({});

ImageSliderExample2Template.args = Props;
