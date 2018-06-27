import chai from 'chai';
import moment from 'moment';
import sum from '../sum';
import {sha256} from 'js-sha256';
import PouchDB from 'pouchdb';


let expect = chai.expect;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).to.be.equal(3);
  });


test('注册一个新用户，用户名为simontaosim， 密码为xxxxxxx, 角色名为admin', (done)=>{
    let user = {
        _id: 'simontaosisafa123wefss2m2=2',
        username: 'simtaos11231safwefm1',
        password: sha256('simonfafwatao112358'),
        role: 'admin',
        createdAt: new Date()
    }
    
    expect(user.password).to.not.equal("simontaos112358");
    let db = new PouchDB('wuligege');
    db.put(user).then(ref=>{
        console.log(ref);
        
    }).catch(err => {
        for (const key in err) {
            if (err.hasOwnProperty(key)) {
                const element = err[key];
                console.log('错误', element);
            }
        }
        done();
        
    });
    db.changes({
        since: 'now',
        live: true,
        include_docs: true
      }).on('change', (change)=> {
        // handle change
        console.log(change);
        done();
        
        
      }).on('complete', function(info) {
        // changes() was canceled
      }).on('error', function (err) {
          for (const key in err) {
              if (err.hasOwnProperty(key)) {
                  const element = err[key];
                  console.log('错误', element);
              }
          }
        done();
      });

})
