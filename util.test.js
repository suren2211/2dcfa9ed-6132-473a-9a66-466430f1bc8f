const { longestCommonSubsequence } = require('./util');

test('Test case 1', () => {
    //var inputString = ['6', '2', '4', '6', '1', '5', '9', '2'];
    var inputString = '60000 10000 50025 90000 90025';
    const text = longestCommonSubsequence(inputString);
    console.log(text);
    expect(text).toStrictEqual('10000 50025 90025');

});

test('Test case 2', () => {

    var inputString = '6 2 4 6 1 5 9 2';
    const text = longestCommonSubsequence(inputString);
    console.log(text);
    expect(text).toStrictEqual('2 4 6');

});

test('Test case 3', () => {

    var inputString = '11509 13451 983 15160 24317 10470 12978 2341 27378 5127 29573 12870 22021 9139 17687 25106 26202 27592 30937 15626 9217 13161 23413 14072 26152 7515 19369 7801 16527 12207 13142 441 25916 32418 5844 20606 20079 32449 11913 24424 17624 16977 16058 12407 5640 9709 8608 9421 3878 12401 14271 31669 4067 10775 12915 17125 18863 12000 27852 7168 32558 16438 18075 31583 22501 6607 13773 17425 7226 19924 504 25888 28059 27715 24116 23574 20221 14738 21804 16576 4488 14485 15221 15922 31120 2977 7198 7435 12232 28914 21384 17147 21170 24138 19575 19330 15450 32731 4970 7674 20548 7783 13352 9431 26019 12454 5532 2606 8651 7144 18402 7540 22249 26619 30882 18057 15090 27215 413 10740 2777 11352 17797 25201 28165 4404 20242 29609 11778 32398 26194 23104 5751 3266 4161 23828 4440 577 11417 964 21340 7736 9707 22128 11442 30316 26607 19136 20976 27752 4121 552 12620 32219 3180 15722 10254 29756 7315 10588 11333 14255 26926 26859 16057 18732 9578 96 14626 10206 28372 1506 19607 9673 24431 15164 17481 28592 1539 29921 24689 19510 14521 29229 23943 22083 30181 2798 31669 13993 18211 22051 6795 8456 23205 11780 15604 6127 18123 13634 2409 15427 11252 16783 6756 11237 10389 20321 13080 13199 21384 25331 11359 22527 12454 31373 11764 31320 21399 30214 2018 7109 9449 6023 16444 1119 32096 401 10511 20817 2957 22082 4757 11833 14242 23508 28075 15826 31109 19046 29317 30161 21795 9983 8097 29196 28935 20432 9465 737 31531 7609 3965 31446 20494 16143 18624 32637 6150 12189 16114 24987 20184 29160 18702 16520 27014 28088 6996 31961 3688 6099 24570 15933 4990 18188 18463 4261 14085 23164 10496 23720 17992 5392 31086 16165 9913 21060 17280 1066 30016 30765 24197 18708 12243 19133 1340 2552 7495 1091 7240 7746 26470 22321 15582 26780 6977 15650 22465 15890 968 14107 1136 18547 4759 25361 20637 26618 19219 2732 9186 22573 25526 3915 2992 7174 4519 22344 904 30033 12942 8317 3437 27477 18598 23559 11929 9398 32020 30537 9327 6298 7287 13876 26033 23307 16832 710 17395 2205 9028 21969 16719 5456 13839 7422 28251 695 7035 16913 25688 16730 3330 14191 12204 16730 14929 11741 16019 30291 19869 22410 10257 21126 2618 23632 24363 32056 14698 25399 9814 18517 22899 21819 22320 10585 17140 15695 21102 14704 14456 27041 11285 220 5196 12832 26606 4504 2190 2108 23091 13627 9607 13292 143 12830 6715 25078 26438 27585 25405 26475 28335 25195 23496 24176 1259 22033 25868 68 10193 4217 6086 24703 17192 6816 13331 28056 16153 24920 17286 23210 21219 3381 8568 22136 28625 4522 23967 13230 22634 14192 11491 26218 14311 9767 23660 31482 19946 12608 31488 27112 620 27674 11404 27955 30199 18795 23552 15072 25110 18914 16224 18609 24075 32267 25112 32053 23487 24434 10641 29185 28927 17675 2049 11068 16612 30417 20871 26721 6547 9390 26487 29248 6695 17563 11763 2630 29932 7176 32699 24319 8654 30846 5189 10713 5393 23427 3089 23083 20034 7614 5943 29045 21357 19803 27202 29930 27792 19377 30016 6187 13136 28194 4378 1366 19179 9795 5922 26175 21614 30013 5867 4861 29480 11892 7773 2473 30046 19814 18440 4962 30016 25301 953 14996 1564 23848 19787 30330 16850 12303 17856 12258 19080 8038 25233 817 5278 12636 10049 25510 3300 3028 7480 995 28427 16651 32207 10153 24666 20347 17064 17123 8866 22784 4160 2534 29556 21818 11975 22263 27537 17202 1327 2317 29346 7744 19075 16345 6954 6700 24954 6404 31416 27283 4684 21176 21089 6540 5828 30561 7021 12684 11414 30389 19537 16007 8692 20466 27102 27224 4188 12646 14519 14435 14772 12597 8968 9337 15256 855 9845 10492 3315 20704 24145 28739 31180 5252 32273 13631 4451 8282 20480 5983 14973 12512 3124 26034 25084 12608 7104 9548 30642 5329 7211 22250 11639 27105 14113 16345 11385 2482 8809 14867 13524 2498 23575 20396 23395 21071 30467 9580 22997 32283 2937 30910 9475 26477 8242 13512 15744 1624 8067 25308 28274 1087 11477 31247 28321 10393 28245 21031 6094 754 7917 15803 10310 30258 31858 3989 17079 2338 26143 3931 8257 8236 16194 8559 10448 1123 27189 9747 26026 23491 28560 21457 580 30393 9629 4378 20314 5862 27660 4397 31806 4896 20456 14394 31345 31929 11210 2759 16240 10756 6221 11348 22736 18966 16577 12602 1677 26058 28708 18393 20384 29192 27214 31986 17615 22342 25963 8018 26057 4686 14254 1713 23666 21058 3396 16857 636 14302 14983 28683 25911 6654 32373 18846 15274 29536 18784 7145 738 23978 23526 15459 13450 15791 21028 14089 19388 1262 28455 15360 3095 11355 15523 4220 16146 19555 21224 1760 23439 30250 23825 16935 19380 12823 11647 18562 17654 18322 30342 10562 26230 12812 31589 14841 4497 26432 19836 11996 12466 21177 27065 4716 24683 10901 19028 24662 11973 392 16572 18327 25812 14884 11217 22499 3726 16215 24147 7752 13533 9781 18842 29967 32242 7415 16520 2787 10205 19268 26301 25909 4442 1968 8201 25054 17646 1667 5159 31750 14899 26043 6824 22597 16752 14932 9005 23561 19821 710 28121 21560 3974 8912 10246 28438 6653 19572 16695 3432 31893 31299 3150 11994 3932 24282 256 32158 24520 28077 12677 15702 29701 24835 18580 8500 22670 24898 9102 19807 11259 12653 23802 1945 7449 1259 23345 23328 3904 25226 14170 13265 22753 14531 4249 13459 20575 1856 8068 19699 6944 16795 7639 21004 29411 20329 22120 7850 21844 19831 29021 32431 20957 29779 20636 27061 27072 18446 4227 20724 13923 30017 218 1126 18922 32590 10757 29482 32267 9192 12926 19239 9502 6102 14467 15345 20852 243 29708 24816 9962 20858 13568 5823 27326 26752 4520 16338 17825 7106 22884 15452 27661 3745 8093 6511 8408 31339 29434 15205 17930 19420 5335 1920 28652 14821 17651 20685 11873 14763 30056 3150 121 29651 31457 4183 9796 7933 3335 25401 17636 25486 11068 23838 4326 11443 14732 8500 29395 2723 27104 12814 23041 2596 17781 9543 12719 9552 27277 14952 11345 12697 21093 22795 22825 28427 13158 14913 14359 7377 21407 16690 16306 14075 24435 18179 2455 16766 6287 24061 6402 17532 28960 20459 28571 24006 26434 23491 25746 2976'

    const text = longestCommonSubsequence(inputString);
    console.log(text);
    expect(text).toStrictEqual('9139 17687 25106 26202 27592 30937');

});

test('Test case 4', () => {


    var inputString = '27892 18536 13491 11084 11970 24975 30922 11945 15113 27101';


    const text = longestCommonSubsequence(inputString);
    console.log(text);
    expect(text).toStrictEqual('9139 17687 25106 26202 27592 30937');

});