const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator()
 const regex = /<\/?span[^>]*>/g;
suite('Unit Tests', () => {
  test('Translate Mangoes are my favorite fruit. to British English', (done) => {
    let translated = 'Mangoes are my favourite fruit.';
    assert.equal(translator.toBritishEnglish('Mangoes are my favorite fruit.').replace(regex, ''), translated);
    done();
  });
  test('Translate I ate yogurt for breakfast. to British English', (done) => {
    let translated = 'I ate yoghurt for breakfast.';
    assert.equal(translator.toBritishEnglish('I ate yogurt for breakfast.').replace(regex, ''), translated);
    done();
  });
  test("Translate We had a party at my friend's condo. to British English", (done) => {
    let translated = "We had a party at my friend's flat."
    assert.equal(translator.toBritishEnglish("We had a party at my friend's condo.").replace(regex, ''), translated);
    done();
  });
  test('Translate Can you toss this in the trashcan for me? to British English', (done) => {
    let translated = 'Can you toss this in the bin for me?';
    assert.equal(translator.toBritishEnglish('Can you toss this in the trashcan for me?').replace(regex, ''), translated);
    done();
  });
  test('Translate The parking lot was full. to British English', (done) => {
    let translated = 'The car park was full.';
    assert.equal(translator.toBritishEnglish('The parking lot was full.').replace(regex, ''), translated)
    done();
  });
    test('Translate Like a high tech Rube Goldberg machine. to British English', (done) => {
      let translated = 'Like a high tech Heath Robinson device.';
      assert.equal(translator.toBritishEnglish('Like a high tech Rube Goldberg machine.').replace(regex, ''), translated)
      done();
    });
    test('Translate To play hooky means to skip class or work. to British English', (done) => {
      let translated = 'To bunk off means to skip class or work.'
      assert.equal(translator.toBritishEnglish('To play hooky means to skip class or work.').replace(regex, ''), translated);
      done();
    });
    test('Translate No Mr. Bond, I expect you to die. to British English', (done) => {
      let translated = 'No Mr Bond, I expect you to die.'
      assert.equal(translator.toBritishEnglish('No Mr. Bond, I expect you to die.').replace(regex, ''), translated);
      done();
    });
    test('Translate Dr. Grosh will see you now. to British English', (done) => {
      let translated = 'Dr Grosh will see you now.'
      assert.equal(translator.toBritishEnglish('Dr. Grosh will see you now.').replace(regex, ''), translated);
      done();
    });
    test('Translate Lunch is at 12:15 today. to British English', (done) => {
      let translated = 'Lunch is at 12.15 today.'
      assert.equal(translator.toBritishEnglish('Lunch is at 12:15 today.').replace(regex, ''), translated);
      done();
    });
    test('Translate We watched the footie match for a while. to American English', (done) => {
      let translated = 'We watched the soccer match for a while.'
      assert.equal(translator.toAmericanEnglish('We watched the footie match for a while.').replace(regex, ''), translated);
      done();
    });
    test('Translate Paracetamol takes up to an hour to work. to American English', (done) => {
      let translated = 'Tylenol takes up to an hour to work.'
      assert.equal(translator.toAmericanEnglish('Paracetamol takes up to an hour to work.').replace(regex, ''), translated);
      done();
    });
    test('Translate First, caramelise the onions. to American English', (done) => {
      let translated = 'First, caramelize the onions.'
      assert.equal(translator.toAmericanEnglish('First, caramelise the onions.').replace(regex, ''), translated);
      done();
    });
    test('Translate I spent the bank holiday at the funfair. to American English', (done) => {
      let translated = 'I spent the public holiday at the carnival.'
      assert.equal(translator.toAmericanEnglish('I spent the bank holiday at the funfair.').replace(regex, ''), translated);
      done();
    });
    test('Translate I had a bicky then went to the chippy. to American English', (done) => {
      let translated = 'I had a cookie then went to the fish-and-fish-and-chip shop.'
      assert.equal(translator.toAmericanEnglish('I had a bicky then went to the chippy.').replace(regex, ''), translated);
      done();
    });
    test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
      let translated = "I've just got odds and ends in my fanny pack."
      assert.equal(translator.toAmericanEnglish("I've just got bits and bobs in my bum bag.").replace(regex, ''), translated);
      done();
    });
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
      let translated = 'The swap meet at Boxted Airfield was called off.'
      assert.equal(translator.toAmericanEnglish('The car boot sale at Boxted Airfield was called off.').replace(regex, ''), translated);
      done();
    });
    test('Translate Have you met Mrs Kalyani? to American English', (done) => {
      let translated = 'Have you met Mrs. Kalyani?'
      assert.equal(translator.toAmericanEnglish('Have you met Mrs Kalyani?').replace(regex, ''), translated);
      done();
    });
    test("Translate Prof Joyner of King's College, London. to American English", (done) => {
      let translated = "Prof. Joyner of King's College, London."
      assert.equal(translator.toAmericanEnglish("Prof Joyner of King's College, London.").replace(regex, ''), translated);
      done();
    });
    test('Translate Tea time is usually around 4 or 4.30. to American English', (done) => {
      let translated = 'Tea time is usually around 4 or 4:30.'
      assert.equal(translator.toAmericanEnglish('Tea time is usually around 4 or 4.30.').replace(regex, ''), translated);
      done();
    });
  suite('Highlight Translation', () => {
    test('Highlight translation in Mangoes are my favorite fruit.', (done) => {
    let translated = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
    assert.equal(translator.toBritishEnglish("Mangoes are my favorite fruit."), translated)
    done();
  })
  test('Highlight translation in I ate yogurt for breakfast.', (done) => {
    let translated = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
    assert.equal(translator.toBritishEnglish("I ate yogurt for breakfast."), translated)
    done();
  })
  test('Highlight translation in We watched the footie match for a while.', (done) => {
    let translated = 'We watched the <span class="highlight">soccer</span> match for a while.'
    assert.equal(translator.toAmericanEnglish("We watched the footie match for a while."), translated)
    done();
  })
   test('Highlight translation in Paracetamol takes up to an hour to work.', (done) => {
    let translated = '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    assert.equal(translator.toAmericanEnglish("Paracetamol takes up to an hour to work."), translated)
    done();
  })
  })
  
});
