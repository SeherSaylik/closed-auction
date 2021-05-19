// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function Auctioner(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    deadline: ctc0,
    minPrice: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0, ctc2, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc2, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  const v22 = stdlib.protect(ctc1, await interact.getParams(), {
    at: './index.rsh:55:43:application',
    fs: ['at ./index.rsh:54:19:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)'],
    msg: 'getParams',
    who: 'Auctioner'
    });
  const v23 = v22.deadline;
  const v24 = v22.minPrice;
  
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:58:15:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0], [v18, v23, v24], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:58:15:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:58:15:dot', stdlib.UInt_max, 0)]);
    const [v26, v27] = txn1.data;
    const v29 = txn1.time;
    const v25 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:59:13:after expr stmt semicolon', stdlib.UInt_max, 1), v25, v27, v29]);
    sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:59:13:after expr stmt semicolon', stdlib.UInt_max, 1), v25, v27]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:59:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v26, v27] = txn1.data;
  const v29 = txn1.time;
  const v25 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v37 = txn2.time;
  const v35 = txn2.from;
  ;
  const v40 = stdlib.add(v29, stdlib.checkedBigNumberify('./index.rsh:67:53:decimal', stdlib.UInt_max, 20));
  let v43 = v27;
  let v44 = v25;
  let v120 = v37;
  let v121 = v29;
  let v122 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v52 = stdlib.gt(v40, v121);
    
    return v52;})()) {
    const v82 = stdlib.sub(v40, v121);
    const txn3 = await (ctc.recv(7, 1, [ctc3], false, v82));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 5), [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0], [v25, v40, v43, v44, v82, v120, v122], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v120, v122]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v122]);
        const [] = txn4.data;
        const v87 = txn4.time;
        const v85 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv43 = v43;
        const cv44 = v44;
        const cv120 = v87;
        const cv121 = v120;
        const cv122 = v122;
        
        (() => {
          const v43 = cv43;
          const v44 = cv44;
          const v120 = cv120;
          const v121 = cv121;
          const v122 = cv122;
          
          if ((() => {
            const v52 = stdlib.gt(v40, v121);
            
            return v52;})()) {
            const v82 = stdlib.sub(v40, v121);
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v120, v122]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v122]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v43, v120, v122]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v43, v122]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();
        return sim_r;
        })));
      const [] = txn4.data;
      const v87 = txn4.time;
      const v85 = txn4.from;
      ;
      const cv43 = v43;
      const cv44 = v44;
      const cv120 = v87;
      const cv121 = v120;
      const cv122 = v122;
      
      v43 = cv43;
      v44 = cv44;
      v120 = cv120;
      v121 = cv121;
      v122 = cv122;
      
      continue;
      }
    else {
      const [v71] = txn3.data;
      const v75 = txn3.time;
      const v70 = txn3.from;
      ;
      const v78 = v71[stdlib.checkedBigNumberify('./index.rsh:68:11:array', stdlib.UInt_max, 0)];
      const v79 = v71[stdlib.checkedBigNumberify('./index.rsh:68:11:array', stdlib.UInt_max, 1)];
      const cv43 = v78;
      const cv44 = v79;
      const cv120 = v75;
      const cv121 = v120;
      const cv122 = v122;
      
      v43 = cv43;
      v44 = cv44;
      v120 = cv120;
      v121 = cv121;
      v122 = cv122;
      
      continue;}
    }
  const txn3 = await (ctc.recv(5, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:87:81:decimal', stdlib.UInt_max, 200)));
  if (txn3.didTimeout) {
    stdlib.protect(ctc9, await interact.observeTimeout(), {
      at: './index.rsh:89:36:application',
      fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:37:function exp)'],
      msg: 'observeTimeout',
      who: 'Auctioner'
      });
    
    
    const txn4 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:91:17:dot', stdlib.UInt_max, 2), [ctc2, ctc0, ctc0, ctc0], [v25, v43, v120, v122], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:91:17:dot', stdlib.UInt_max, 4), v25, v43, v120, v122]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:91:17:dot', stdlib.UInt_max, 4), v25, v43, v122]);
      const [] = txn4.data;
      const v117 = txn4.time;
      const v115 = txn4.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc10, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
      sim_r.view = [ctc10, []];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn4.data;
    const v117 = txn4.time;
    const v115 = txn4.from;
    ;
    return;
    }
  else {
    const [v94] = txn3.data;
    const v97 = txn3.time;
    const v93 = txn3.from;
    const v96 = stdlib.add(v122, v43);
    ;
    ;
    stdlib.protect(ctc9, await interact.seeWinningBid(v44, v43), {
      at: './index.rsh:99:31:application',
      fs: ['at ./index.rsh:98:9:application call to [unknown function] (defined at: ./index.rsh:98:33:function exp)'],
      msg: 'seeWinningBid',
      who: 'Auctioner'
      });
    
    return;}
  
  
  
  };
export async function Buyer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc1, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc0], false, false));
  const [v26, v27] = txn1.data;
  const v29 = txn1.time;
  const v25 = txn1.from;
  ;
  const v33 = stdlib.protect(ctc0, await interact.bid(v27), {
    at: './index.rsh:62:34:application',
    fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:19:function exp)'],
    msg: 'bid',
    who: 'Buyer'
    });
  const v34 = stdlib.lt(v27, v33);
  stdlib.assert(v34, {
    at: './index.rsh:63:15:application',
    fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:19:function exp)'],
    msg: null,
    who: 'Buyer'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:65:11:dot', stdlib.UInt_max, 2), [ctc1, ctc0, ctc0], [v25, v27, v29], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:65:11:dot', stdlib.UInt_max, 1), v25, v27, v29]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:65:11:dot', stdlib.UInt_max, 1), v25, v27]);
    const [] = txn2.data;
    const v37 = txn2.time;
    const v35 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v40 = stdlib.add(v29, stdlib.checkedBigNumberify('./index.rsh:67:53:decimal', stdlib.UInt_max, 20));
    const v43 = v27;
    const v44 = v25;
    const v120 = v37;
    const v121 = v29;
    const v122 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
    
    if ((() => {
      const v52 = stdlib.gt(v40, v121);
      
      return v52;})()) {
      const v82 = stdlib.sub(v40, v121);
      sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v120, v122]);
      sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v122]);
      sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v43, v120, v122]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v43, v122]);
      sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    return sim_r;
    })));
  const [] = txn2.data;
  const v37 = txn2.time;
  const v35 = txn2.from;
  ;
  const v40 = stdlib.add(v29, stdlib.checkedBigNumberify('./index.rsh:67:53:decimal', stdlib.UInt_max, 20));
  let v43 = v27;
  let v44 = v25;
  let v120 = v37;
  let v121 = v29;
  let v122 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v52 = stdlib.gt(v40, v121);
    
    return v52;})()) {
    const v82 = stdlib.sub(v40, v121);
    const v62 = ctc.selfAddress('Buyer', true, stdlib.checkedBigNumberify('./index.rsh:68:49:application', stdlib.UInt_max, 61));
    const v65 = stdlib.gt(v33, v43);
    
    const v67 = [v33, v62];
    
    const txn3 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 5), [ctc1, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0, ctc2], [v25, v40, v43, v44, v82, v120, v122, v67], [stdlib.checkedBigNumberify('./index.rsh:76:23:decimal', stdlib.UInt_max, 0), []], [ctc2], v65, false, v82, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v120, v122]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v122]);
      const [v71] = txn3.data;
      const v75 = txn3.time;
      const v70 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:76:23:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v78 = v71[stdlib.checkedBigNumberify('./index.rsh:68:11:array', stdlib.UInt_max, 0)];
      const v79 = v71[stdlib.checkedBigNumberify('./index.rsh:68:11:array', stdlib.UInt_max, 1)];
      const cv43 = v78;
      const cv44 = v79;
      const cv120 = v75;
      const cv121 = v120;
      const cv122 = v122;
      
      (() => {
        const v43 = cv43;
        const v44 = cv44;
        const v120 = cv120;
        const v121 = cv121;
        const v122 = cv122;
        
        if ((() => {
          const v52 = stdlib.gt(v40, v121);
          
          return v52;})()) {
          const v82 = stdlib.sub(v40, v121);
          sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v120, v122]);
          sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v122]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v43, v120, v122]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v43, v122]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }})();
      return sim_r;
      })));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 5), [ctc1, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0], [v25, v40, v43, v44, v82, v120, v122], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v120, v122]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:49:dot', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v122]);
        const [] = txn4.data;
        const v87 = txn4.time;
        const v85 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv43 = v43;
        const cv44 = v44;
        const cv120 = v87;
        const cv121 = v120;
        const cv122 = v122;
        
        (() => {
          const v43 = cv43;
          const v44 = cv44;
          const v120 = cv120;
          const v121 = cv121;
          const v122 = cv122;
          
          if ((() => {
            const v52 = stdlib.gt(v40, v121);
            
            return v52;})()) {
            const v82 = stdlib.sub(v40, v121);
            sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v120, v122]);
            sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 3), v25, v40, v43, v44, v82, v122]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:68:49:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v43, v120, v122]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v43, v122]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:83:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();
        return sim_r;
        })));
      const [] = txn4.data;
      const v87 = txn4.time;
      const v85 = txn4.from;
      ;
      const cv43 = v43;
      const cv44 = v44;
      const cv120 = v87;
      const cv121 = v120;
      const cv122 = v122;
      
      v43 = cv43;
      v44 = cv44;
      v120 = cv120;
      v121 = cv121;
      v122 = cv122;
      
      continue;
      }
    else {
      const [v71] = txn3.data;
      const v75 = txn3.time;
      const v70 = txn3.from;
      ;
      const v78 = v71[stdlib.checkedBigNumberify('./index.rsh:68:11:array', stdlib.UInt_max, 0)];
      const v79 = v71[stdlib.checkedBigNumberify('./index.rsh:68:11:array', stdlib.UInt_max, 1)];
      const cv43 = v78;
      const cv44 = v79;
      const cv120 = v75;
      const cv121 = v120;
      const cv122 = v122;
      
      v43 = cv43;
      v44 = cv44;
      v120 = cv120;
      v121 = cv121;
      v122 = cv122;
      
      continue;}
    }
  const v90 = ctc.selfAddress('Buyer', true, stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, 89));
  
  const v92 = stdlib.addressEq(v90, v44);
  
  const txn3 = await (ctc.sendrecv(5, 1, stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, 2), [ctc1, ctc0, ctc0, ctc0, ctc1], [v25, v43, v120, v122, v90], [v43, []], [ctc1], v92, false, stdlib.checkedBigNumberify('./index.rsh:87:81:decimal', stdlib.UInt_max, 200), (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, 4), v25, v43, v120, v122]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, 4), v25, v43, v122]);
    const [v94] = txn3.data;
    const v97 = txn3.time;
    const v93 = txn3.from;
    
    const v96 = stdlib.add(v122, v43);
    sim_r.txns.push({
      amt: v43,
      kind: 'to',
      tok: undefined
      });
    sim_r.txns.push({
      amt: v96,
      kind: 'from',
      to: v25,
      tok: undefined
      });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc9, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
    sim_r.view = [ctc9, []];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  if (txn3.didTimeout) {
    stdlib.protect(ctc8, await interact.observeTimeout(), {
      at: './index.rsh:89:36:application',
      fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:37:function exp)'],
      msg: 'observeTimeout',
      who: 'Buyer'
      });
    
    
    const txn4 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:91:17:dot', stdlib.UInt_max, 2), [ctc1, ctc0, ctc0, ctc0], [v25, v43, v120, v122], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:91:17:dot', stdlib.UInt_max, 4), v25, v43, v120, v122]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:91:17:dot', stdlib.UInt_max, 4), v25, v43, v122]);
      const [] = txn4.data;
      const v117 = txn4.time;
      const v115 = txn4.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.view = [ctc9, []];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn4.data;
    const v117 = txn4.time;
    const v115 = txn4.from;
    ;
    return;
    }
  else {
    const [v94] = txn3.data;
    const v97 = txn3.time;
    const v93 = txn3.from;
    const v96 = stdlib.add(v122, v43);
    ;
    ;
    stdlib.protect(ctc8, await interact.seeWinningBid(v44, v43), {
      at: './index.rsh:99:31:application',
      fs: ['at ./index.rsh:98:9:application call to [unknown function] (defined at: ./index.rsh:98:33:function exp)'],
      msg: 'seeWinningBid',
      who: 'Buyer'
      });
    
    return;}
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 8,
    size: 97
    }, {
    count: 8,
    size: 121
    }, null, null, {
    count: 8,
    size: 161
    }, {
    count: 8,
    size: 129
    }, {
    count: 8,
    size: 217
    }, {
    count: 8,
    size: 177
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 6
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:58:15:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 254
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
gtxna 0 ApplicationArgs 7
pop
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:65:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 4
btoi
int 20
+
dup
store 253
load 4
btoi
>
bz l0
load 253
load 4
btoi
-
store 252
byte base64()
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 253
itob
concat
load 254
itob
concat
load 255
concat
load 252
itob
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b done
l0:
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 32
store 252
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:87:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 253
load 254
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 200
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
dup
gtxn 5 LastValid
>=
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
gtxna 0 ApplicationArgs 7
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:91:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
load 4
btoi
int 200
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 40
store 249
pop
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:68:49:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 249
substring 0 8
btoi
store 248
load 254
load 4
btoi
>
bz l0
load 254
load 4
btoi
-
store 247
byte base64()
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
itob
concat
load 248
itob
concat
load 249
substring 8 40
concat
load 247
itob
concat
load 250
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 247
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
b done
l0:
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 248
itob
concat
load 250
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 251
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
pop
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:68:49:dot"
// "[at ./index.rsh:68:49:application call to [unknown function] (defined at: ./index.rsh:68:49:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 254
load 4
btoi
>
bz l0
load 254
load 4
btoi
-
store 249
byte base64()
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 249
itob
concat
load 250
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 249
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
pop
b done
l0:
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 253
itob
concat
load 250
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 251
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
pop
done:
int 1
return
`],
  unsupported: false,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v94",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v44",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T14",
                "name": "v71",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v44",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v94",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v44",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T14",
                "name": "v71",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v44",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610c9d806100826000396000f3fe6080604052600436106100595760003560e01c806310f48adc146100655780632438df701461007a5780633b962ab31461008d5780636eace2d7146100a0578063a68ad9ba146100b3578063bfc775ac146100c657610060565b3661006057005b600080fd5b610078610073366004610a0b565b6100d9565b005b610078610088366004610a1c565b6101fe565b61007861009b3660046109f9565b610317565b6100786100ae3660046109cc565b610447565b6100786100c13660046109cc565b610541565b6100786100d43660046109e7565b6105d4565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461011657600080fd5b60008055341561012557600080fd5b604080518235815260208084013590820152828201358183015290517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99181900360600190a1610198604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152604082810135602080840191825243838501908152835160019281019290925284516001600160a01b031693820193909352905160608201529051608082015260a0015b60408051601f1981840301815291905280516020909101206000555050565b604051610212906001908390602001610bf9565b6040516020818303038152906040528051906020012060001c6000541461023857600080fd5b60008055341561024757600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516102769190610bb5565b60405180910390a1610286610916565b61029360208301836109ab565b81516001600160a01b0390911690526102b160146040840135610c22565b81516020908101919091528082015190830180359091526102d290836109ab565b602080830180516001600160a01b039093169290910191909152805143604091820152815190840135606090910152516000608090910152610313816106c0565b5050565b60405161032b906003908390602001610c0d565b6040516020818303038152906040528051906020012060001c6000541461035157600080fd5b60008055610367608082013560a0830135610c22565b43101561037357600080fd5b341561037e57600080fd5b7f56ed6936527d17fa80129fafb1256d72e8ac3627c12594ff8dcc9cba2c2b5a6c816040516103ad9190610b84565b60405180910390a16103bd610916565b6103ca60208301836109ab565b81516001600160a01b0390911690528051602080840135918101919091528101516040830135905261040260808301606084016109ab565b602080830180516001600160a01b039093169290910191909152805143604090910152805160a08401356060909101525160c0830135608090910152610313816106c0565b60405161045b906004908390602001610be5565b6040516020818303038152906040528051906020012060001c6000541461048157600080fd5b6000805561049460c86040830135610c22565b431061049f57600080fd5b346020820135146104af57600080fd5b6104bc60208201826109ab565b6001600160a01b03166108fc6104da60208401356060850135610c22565b6040518115909202916000818181858888f19350505050158015610502573d6000803e3d6000fd5b507f2165adfae9425de695e45fa50e3f20e9e2bff4f4fe5e98c372c4ce28248f24c1816040516105329190610b1b565b60405180910390a16000805533ff5b604051610555906004908390602001610be5565b6040516020818303038152906040528051906020012060001c6000541461057b57600080fd5b6000805561058e60c86040830135610c22565b43101561059a57600080fd5b34156105a557600080fd5b7fa75e708dac69cd363c2560fdea74b188dd4a5f685c29b8af74a71b20f1bae34d816040516105329190610aeb565b6040516105e8906003908390602001610c0d565b6040516020818303038152906040528051906020012060001c6000541461060e57600080fd5b60008055610624608082013560a0830135610c22565b431061062f57600080fd5b341561063a57600080fd5b7f02be6019270caadd91c5ff5be5c96413e6b9a9b32e511b3f0e577dd8c370840b816040516106699190610b49565b60405180910390a1610679610916565b61068660208301836109ab565b81516001600160a01b03909116905280516020808401359181019190915281015160e08301359052610402610120830161010084016109ab565b604080516020810190915260008152816020015160600151826000015160200151111561080a578160200151606001518260000151602001516107039190610c3a565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b0390811682528351602090810151818401908152818601805151604080870191825282518501518616606080890191825289516080808b01918252865185015160a0808d01918252975182015160c0808e01918252875160039c81019c909c528d518d16978c01979097529851938a01939093529451948801949094529051909616928501929092525190830152915160e082015290516101008201526101200160408051601f19818403018152919052805160209091012060005550610313565b6040805160c081018252600081830181815260608301828152608080850184815260a086018581528487526020808801969096528951516001600160a01b031690945293880180515190925281519095015190925290519092015190915261087181610876565b505050565b6108aa604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015181860190815286516060908101518188019081528351600496810196909652875190961692850192909252915190830152516080820152905160a082015260c0016101df565b604080516080810182526000918101828152606082019290925290819081526020016109736040518060a001604052806000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b905290565b80356001600160a01b038116811461098f57600080fd5b919050565b600060a082840312156109a5578081fd5b50919050565b6000602082840312156109bc578081fd5b6109c582610978565b9392505050565b600060a082840312156109dd578081fd5b6109c58383610994565b600061012082840312156109a5578081fd5b600061010082840312156109a5578081fd5b6000606082840312156109a5578081fd5b6000608082840312156109a5578081fd5b6001600160a01b03610a3e82610978565b1682526020810135602083015260408101356040830152606081013560608301525050565b6001600160a01b03610a7482610978565b16825260208181013590830152604090810135910152565b6001600160a01b0380610a9e83610978565b168352602082013560208401526040820135604084015280610ac260608401610978565b166060840152506080810135608083015260a081013560a083015260c081013560c08301525050565b60a08101610af98284610a2d565b6080830135801515808214610b0d57600080fd5b806080850152505092915050565b60a08101610b298284610a2d565b6001600160a01b03610b3d60808501610978565b16608083015292915050565b6101208101610b588284610a8c565b60e083810135908301526101006001600160a01b03610b78828601610978565b16818401525092915050565b6101008101610b938284610a8c565b60e0830135801515808214610ba757600080fd5b8060e0850152505092915050565b60808101610bc38284610a63565b6060830135801515808214610bd757600080fd5b806060850152505092915050565b82815260a081016109c56020830184610a2d565b828152608081016109c56020830184610a63565b82815261010081016109c56020830184610a8c565b60008219821115610c3557610c35610c51565b500190565b600082821015610c4c57610c4c610c51565b500390565b634e487b7160e01b600052601160045260246000fdfea264697066735822122088939e3e2774febeb74e98867ba0f566315831fa459bd2bbe135db6809fb405764736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

