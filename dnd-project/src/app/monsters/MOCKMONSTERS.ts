import { Monster } from './monsters.model';

export const MOCKMONSERS: Monster[] = [
  {
    'id': '1',
    'name': 'Young Black Dragon',
    'image': 'images/black-dragon.jpg',
    'type': 'Dragon',
    'hp': '127',
    'armor': '18',
    'vulnerabilities': ['None'],
    'immunity': ['Acid']
  },
  {
    'id': '2',
    'name': 'Shadow Demon',
    'image': 'images/shadow-demon.jpg',
    'type': 'Fiend',
    'hp': '66',
    'armor': '13',
    'vulnerabilities': ['Radiant'],
    'immunity': ['Cold']
  },
  {
    'id': '3',
    'name': 'Earth Elemental',
    'image': 'images/earth-elemental.jpg',
    'type': 'Elemental',
    'hp': '126',
    'armor': '17',
    'vulnerabilities': ['Thunder'],
    'immunity': ['Poison']
  },
  {
    'id': '4',
    'name': 'Flumph',
    'image': 'images/flumph.jpg',
    'type': 'Aberration',
    'hp': '7',
    'armor': '12',
    'vulnerabilities': ['Psychic'],
    'immunity': ['None']
  },
  {
    'id': '5',
    'name': 'Dust Mephit',
    'image': 'images/dust-mephit.jpg',
    'type': 'Elemental',
    'hp': '17',
    'armor': '12',
    'vulnerabilities': ['Fire'],
    'immunity': ['Poison']
  },
  {
    'id': '6',
    'name': 'Mummy',
    'image': 'images/mummy.jpg',
    'type': 'Undead',
    'hp': '58',
    'armor': '11',
    'vulnerabilities': ['Fire'],
    'immunity': ['Necrodic, Poison']
  },
  {
    'id': '7',
    'name': 'Fire Snake',
    'image': 'images/fire-snake.jpg',
    'type': 'Elemental',
    'hp': '22',
    'armor': '14',
    'vulnerabilities': ['Cold'],
    'immunity': ['Fire']
  }
];

