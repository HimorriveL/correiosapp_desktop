import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 9;
`;

interface INotificationList {
  visible: boolean;
}

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const NotificationList = styled.div<INotificationList>`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'display' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Notification = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 18px;
    line-height: 28px;
  }
`;
