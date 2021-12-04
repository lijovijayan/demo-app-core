import { Skill } from '@models';
import { ISkill, IFSkill } from '@types';

export class SkillService {
    constructor() {
        // do nothing.
    }

    getSkills(): Promise<ISkill[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const skills: ISkill[] = await Skill.find();
                resolve(skills);
            } catch (err) {
                reject(err);
            }
        });
    }

    getSkillsWithFilter(filter: IFSkill): Promise<ISkill[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const skills: ISkill[] = await Skill.find(filter);
                resolve(skills);
            } catch (err) {
                reject(err);
            }
        });
    }

    getSkillById(id: number): Promise<ISkill> {
        return new Promise(async (resolve, reject) => {
            try {
                const skill: ISkill = await Skill.findOne({ id });
                resolve(skill);
            } catch (err) {
                reject(err);
            }
        });
    }
}
