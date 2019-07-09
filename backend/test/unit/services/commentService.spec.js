
const commentsService = require('../../../rest/services/commentsService')

const commentsModel = require('../../../DAL/models').comment;

const sinon = require('sinon')

const expect = require('assert')

describe('comments service test cases', () => {

    describe('AddInstance test cases', (done) => {

        let instance = { content: 'test comment', user: 'mregydev',bulletinId:3}

        let createStub = sinon.stub(commentsModel, 'create').returns({ id: 2 })

        it('should call create method of commentsmodel', (done) => {
            {
                commentsService.AddComment(instance)
                expect.equal(createStub.calledOnce, true)
                done()
            }
        })
    })
})