import { log } from 'console';

interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}

class PlayListIterator implements Iterator<Song> {
    private index: number = 0;

    constructor(private songs: Song[]) {}
    next(): Song | null {
        if (this.hasNext()) {
            return this.songs[this.index++];
        }
        return null;
    }

    hasNext(): boolean {
        return this.index < this.songs.length;
    }
}

// iterable collection interface
interface IterableCollection<T> {
    getIterator(): Iterator<T>;
}
// Colection
class PlayList implements IterableCollection<Song> {
    private songs: Song[] = [];

    getIterator(): Iterator<Song> {
        return new PlayListIterator(this.songs);
    }
    addSong(song: Song) {
        this.songs.push(song);
    }
}

class Song {
    constructor(public title: string, public artist: string) {}
}
export default class {
    static run() {
        const playList = new PlayList();
        playList.addSong(new Song('White Christmas', 'Bing Crosby'));
        playList.addSong(
            new Song('Something About the Way You Look Tonight', 'Elton John')
        );
        playList.addSong(new Song('Silent Night', 'Bing Crosby'));
        playList.addSong(new Song('Yes Sir, I Can Boogie', 'Baccara'));

        const iterator = playList.getIterator();
        while (iterator.hasNext()) {
          const {artist, title} = iterator.next() as Song
            console.log(`${artist}: ${title}`);
        }
    }
}
