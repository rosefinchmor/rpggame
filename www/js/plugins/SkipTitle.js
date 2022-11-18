//=============================================================================
// Skipthetitle.js
/*: 
*@plugindesc Skip scene_title.
*@author wwj
*
*@help 
* just trace on.
;*/
//=============================================================================
Scene_Title.prototype.initialize = function(){
	Scene_Base.prototype.initialize.call(this);
}; 

Scene_Title.prototype.create = function(){
	Scene_Base.prototype.create.call(this);
};

Scene_Title.prototype.start = function(){
	Scene_Base.prototype.start.call(this);
	SceneManager.clearStack();
	DataManager.setupNewGame();
	SceneManager.goto(Scene_Map);
};
 
Scene_Title.prototype.update = function(){
	Scene_Base.prototype.update.call(this);
};

Scene_Title.prototype.isBusy = function(){
	return false;
};

Scene_Title.prototype.terminate = function(){
	Scene_Base.prototype.terminate.call(this);
}; 