import { expect } from 'chai'
import { Item, GildedRose } from '../app/gilded-rose'

describe('Gilded Rose', function () {
  it('should foo', function () {
    const gildedRose = new GildedRose([{ name: 'foo', sellIn: 0, quality: 0 }])
    const items = gildedRose.updateQuality()
    expect(items[0].name).to.equal('fixme')
  })
})
