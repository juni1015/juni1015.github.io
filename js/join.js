const userName_check = () => {
    const userName = document.getElementById("member-user-name");
    const userNameResult = document.getElementById("username-result");
    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d-_]{5,10}$/;
    if (userName.value.match(exp)) {
        userNameResult.innerHTML = "사용 가능";
        userNameResult.style.color = "green";
        return true;
    } else {
        if (userName.value.length == 0) {
            userNameResult.innerHTML = "필수 입력입니다"
            userNameResult.style.color = "red";
        } else if (userName.value.length < 5 || userName.value.length > 10) {
            userNameResult.innerHTML = "5~10글자로 작성해주세요"
            userNameResult.style.color = "red";
        } else {
            userNameResult.innerHTML = "영문 소문자와 숫자는 필수 입력이며 특수문자는 -_만 사용가능합니다"
            userNameResult.style.color = "red";
        }
        return false;
    }
}
const password_check = () => {
    const password = document.getElementById("member-password");
    const passwordResult = document.getElementById("password-result");
    const exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_!#$])[A-Za-z\d-_!#$]{6,18}$/;
    if (password.value.match(exp)) {
        passwordResult.innerHTML = "사용 가능";
        passwordResult.style.color = "green";
        return true;
    } else {
        if (password.value.length == 0) {
            passwordResult.innerHTML = "필수 입력입니다"
            passwordResult.style.color = "red";
        } else if (password.value.length < 6 || password.value.length > 18) {
            passwordResult.innerHTML = "6~18글자로 작성해주세요"
            passwordResult.style.color = "red";
        } else {
            passwordResult.innerHTML = "영문 소문자와 대문자, 숫자, 특수문자(!,#,$,-,_)는 필수 입력입니다"
            passwordResult.style.color = "red";
        }
        return false;
    }
}
const passwordConfirm_check = () => {
    const password = document.getElementById("member-password");
    const passwordOk = document.getElementById("password-confirm");
    const passwordOkResult = document.getElementById("password-confirm-result");
    if (passwordOk.value.length == 0) {
        passwordOkResult.innerHTML = "비밀번호 확인을 위해 작성해주세요";
        passwordOkResult.style.color = "red";
        return false;
    } else if (password.value == passwordOk.value) {
        passwordOkResult.innerHTML = "비밀번호 확인 완료";
        passwordOkResult.style.color = "green";
        return true;
    } else {
        passwordOkResult.innerHTML = "작성된 비밀번호와 일치하지 않습니다";
        passwordOkResult.style.color = "red";
        return false;
    }
}
const memberName_check = () => {
    const name = document.getElementById("member-name");
    const nameResult = document.getElementById("name-result");
    if (name.value.length == 0) {
        nameResult.innerHTML = "필수 입력입니다";
        nameResult.style.color = "red";
        return false;
    } else {
        nameResult.innerHTML = "";
        return true;
    }
}
const memberMobile_check = () => {
    const mobile = document.getElementById("member-mobile");
    const mobileResult = document.getElementById("mobile-result");
    const exp = /^\d{3}-\d{4}-\d{4}$/;
    // match는 정규식에 맞는지 안 맞는지를 확인하고 true, flass를 줌
    if (mobile.value.match(exp) || mobile.value.length == 0) {
        mobileResult.innerHTML = ""
    } else {
        mobileResult.innerHTML = "전화번호 형식에 맞지 않습니다. 010-0000-0000 형식에 맞게 작성해주세요"
        mobileResult.style.color = "red";
    }
}
const domain_select = () => {
    const domain = document.getElementById("email-domain-select");
    const domainResult = document.getElementById("email-domain");
    domainResult.value = domain.value;
}

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if (data.userSelectedType === 'R') {
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if (extraAddr !== '') {
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;

            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}
const join_check = () => {
    // email, password 중 하나라도 입력되지 않았으면 submit을 하지 않고
    // 입력자히 않은 항목에 focus를 줌
    const userName = document.getElementById("member-user-name");
    const password = document.getElementById("member-password");
    const passwordOk = document.getElementById("password-confirm");
    const name = document.getElementById("member-name");
    if (userName_check() && password_check() && passwordConfirm_check() && memberName_check()) {
        return true;
    } else {
        if (!userName_check()) {
            // email 입력에 focus
            userName.focus();
            return false;
        } else if (!password_check()) {
            password.focus();
            return false;
        } else if (!passwordConfirm_check()) {
            passwordOk.focus();
            return false;
        } else if (!memberName_check()) {
            name.focus();
            return false;
        }
    }
}