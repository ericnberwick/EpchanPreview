clear;

D1=datetime(repmat(2000, [5, 1]), repmat(1, [5 1]), [1 1 2 2 2]', [23 23 0 0 0]', [58 59 0 1 2]', zeros(1, 5)');
cl1=[11:15]';

D2=datetime(repmat(2000, [5, 1]), repmat(1, [5 1]), [1 2 2 2 2]', [23 0 0 0 0]', [58 0 1 2 3]', zeros(1, 5)');
cl2=[11:15]';

[D, cl]=matchBars(D1, cl1, D2, cl2);
   
assert(all(D==datetime(repmat(2000, [6, 1]), repmat(1, [6 1]), [1 1 2 2 2 2]', [23 23 0 0 0 0]', [58 59 0 1 2 3]', zeros(1, 6)')));

bid1=[10.5:14.5]';
bid2=[100.5:114.5]';

ask1=[11.5:15.5]';
ask2=[111.5:115.5]';

[D, cl, bid, ask]=matchBars(D1, cl1, D2, cl2, bid1, ask1, bid2, ask2);

assert(all(cl(:, 1)==[11 12 13 14 15 15]'));
assert(all(cl(:, 2)==[11 11 12 13 14 15]'));

assert(all(bid(:, 1)==[10.5 11.5 12.5 13.5 14.5 14.5]'));
assert(all(bid(:, 2)==[100.5 100.5 101.5 102.5 103.5 104.5]'));

assert(all(ask(:, 1)==[11.5 12.5 13.5 14.5 15.5 15.5]'));
assert(all(ask(:, 2)==[111.5 111.5 112.5 113.5 114.5 115.5]'));