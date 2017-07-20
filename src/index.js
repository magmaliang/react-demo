import React ,{Component} from 'react';
import {render} from 'react-dom';
import JobTree from './jobs-tree';

import mData from './mockdata.js';

render( <JobTree {...mData} />,
	document.getElementById('container'));