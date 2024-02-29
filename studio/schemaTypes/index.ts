import opening_hours from './schemas/settings/opening_hours'
import day from './objects/day'
import time from './objects/time'
import pizza from './schemas/food/pizza'
import burger from './schemas/food/burger'
import standing_offer from './schemas/food/standing_offer'
import side_dish from './schemas/food/side_dish'
import dressing from './schemas/food/dressing'
import drink from './schemas/food/drink'
import generic_food_data from './objects/generic_food_data'
import homepage_settings from './schemas/settings/homepage_settings'

const objects = [day, time, generic_food_data];
const foodSchemas = [pizza, burger, standing_offer, side_dish, dressing, drink]
const schemas = [homepage_settings, opening_hours];

export const schemaTypes = [...objects, ...schemas, ...foodSchemas]
