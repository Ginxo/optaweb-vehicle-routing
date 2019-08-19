/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as L from 'leaflet';
import * as React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { Location } from '../../store/route/types';

const homeIcon = L.icon({
  iconAnchor: [12, 12],
  iconSize: [24, 24],
  iconUrl: 'if_big_house-home_2222740.png',
  popupAnchor: [0, -10],
  shadowAnchor: [16, 2],
  shadowSize: [50, 16],
  shadowUrl: 'if_big_house-home_2222740_shadow.png',
});

const defaultIcon = new L.Icon.Default();

export interface Props {
  location: Location;
  isDepot: boolean;
  isSelected: boolean;
  removeHandler: (id: number) => void;
}

const LocationMarker: React.FC<Props> = ({
  location,
  isDepot,
  isSelected,
  removeHandler,
}) => {
  const icon = isDepot ? homeIcon : defaultIcon;
  return (
    <Marker
      key={location.id}
      position={location}
      icon={icon}
      onClick={() => removeHandler(location.id)}
    >
      <Tooltip
        // The permanent and non-permanent tooltips are different components
        // and need to have different keys
        key={location.id + (isSelected ? 'T' : 't')}
        permanent={isSelected}
      >
        {`Location ${location.id} [Lat=${location.lat}, Lng=${location.lng}]`}
      </Tooltip>
    </Marker>
  );
};

export default LocationMarker;
