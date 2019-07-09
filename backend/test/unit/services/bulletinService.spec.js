
const bulletinService = require('../../../rest/services/bulletinService')

const bulletinModel = require('../../../DAL/models').bulletin;

const sinon = require('sinon')

const expect = require('assert')

describe('bulletin service test cases', () => {

    describe('AddInstance test cases', (done) => {

        let instance = { title: 'test title', content: 'test content', logourl: 'drjeljrlexd.png' }

        let createStub = sinon.stub(bulletinModel, 'create').returns({ id: 2 })

        it('should call create method of bulletinmodel', (done) => {
            {
                bulletinService.AddInstance(instance)
                expect.equal(createStub.calledOnce, true)
                done()
            }
        })
    })
})