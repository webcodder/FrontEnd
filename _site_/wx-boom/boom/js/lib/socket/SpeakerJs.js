/**
 * Created by Administrator on 2016/7/25.
 */
var boomWebSocket = {
    //������Ϣ
    messageType: {ONETOONE: 0, ONETOMULTI: 1, GROUP: 2},
    //����Ⱥ����Ϣ
    createGroupMessage: function (content, group, speaker) {
        return {'type': 2, 'content': content, 'speaker': speaker, 'group': group}
    },
    createSpeaker: function (name, num, headImg) {
        return {'name': name, 'num': num, 'headImg': headImg};
    }
}
