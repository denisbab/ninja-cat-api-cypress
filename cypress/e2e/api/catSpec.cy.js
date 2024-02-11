import 'cypress-plugin-api'
import responseMessages from '../../fixtures/responseMessages.json';
import { 
    apiKey,
    apiParams, 
    apiCatBaseUrl,
} from '../../support/setup';

describe('Cat API Tests', () => {

    let catTestData;
    before('Loading Fixtures', () => {
    // Load cat test data
      cy.fixture('catTestData.json').then((catData) => {
        catTestData = catData;
      });
    });

    it('Verify GET request with cat breed name parameter', () => {
        cy.api({
            method: apiParams.method.GET,
            url: apiCatBaseUrl + `/?name=${catTestData.name}`,
            headers: {
                'X-Api-Key': apiKey, 
            }
        }).should((response) => {

                expect(response.status).to.equal(200);
                expect(response.body).to.be.an('array');
                const responseCat = response.body.find(cat => cat.name === catTestData.name);
                expect(responseCat.max_weight).to.equal(catTestData.max_weight);
                expect(responseCat.image_link).to.equal(catTestData.image_link);
            })      
    })
    it('Verify GET request with cat breed min_weight and name parameters', () => {
        cy.api({
            method: apiParams.method.GET,
            url: apiCatBaseUrl + `/?name=${catTestData.name}&min_weight=${catTestData.min_weight}`,
            headers: {
                'X-Api-Key': apiKey, 
            }
        }).should((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.an('array');
                const responseCat = response.body.find(cat => cat.name === catTestData.name);
                expect(responseCat.min_weight).to.equal(catTestData.min_weight);
            })
            
    })

    it('Verify GET request with all optional parameters', () => {
        cy.api({
            method: apiParams.method.GET,
            url: apiCatBaseUrl + `/?name=${catTestData.name}&
            min_weight=${catTestData.min_weight}&
            max_weight=${catTestData.max_weight}&
            min_life_expectancy=${catTestData.min_life_expectancy}&
            max_life_expectancy=${catTestData.max_life_expectancy}&
            shedding=${catTestData.shedding}&
            family_friendly=${catTestData.family_friendly}&
            playfulness=${catTestData.playfulness}&
            children_friendly=${catTestData.children_friendly}`,
            headers: {
                'X-Api-Key': apiKey, 
            }
        }).should((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.an('array');
                const responseCat = response.body.find(cat => cat.name === catTestData.name);
                expect(responseCat.min_weight).to.equal(catTestData.min_weight);
                expect(responseCat.max_weight).to.equal(catTestData.max_weight);
                expect(responseCat.min_life_expectancy).to.equal(catTestData.min_life_expectancy);
                expect(responseCat.max_life_expectancy).to.equal(catTestData.max_life_expectancy);
                expect(responseCat.shedding).to.equal(catTestData.shedding);
                expect(responseCat.family_friendly).to.equal(catTestData.family_friendly);
                expect(responseCat.playfulness).to.equal(catTestData.playfulness);
                expect(responseCat.children_friendly).to.equal(catTestData.children_friendly);
            })
            
    })

    it('Verify GET request with wrong X-Api-Key ', () => {
        cy.api({
            method: apiParams.method.GET,
            url: apiCatBaseUrl + `/?name=${catTestData.name}`,
            headers: {
                'X-Api-Key': 'wrongKey', 
            },
            failOnStatusCode: false,
        }).should(response => {
            expect(response.status).to.equal(400);
            expect(response.body.error).to.equal(responseMessages.WRONGKEY);
        })
    })
    
    it('Verify GET request without X-Api-Key ', () => {
        cy.api({
            method: apiParams.method.GET,
            url: apiCatBaseUrl + `/?name=${catTestData.name}`,
            failOnStatusCode: false,
         
        }).should(response => {
            expect(response.status).to.equal(400);
            expect(response.body.error).to.equal(responseMessages.NOKEY);
        })
    })
    


})

