package Associate;

    import java.util.ArrayList;
	import java.util.Collections;

	public class ShuffleArray {
	    public static void main(String[] args) {
	        ArrayList<Integer> arr = new ArrayList<>();
	        arr.add(1);
	        arr.add(2);
	        arr.add(3);
	        arr.add(4);
	        arr.add(5);
	        arr.add(6);
	        arr.add(7);
	        System.out.println(arr);

	        Collections.shuffle(arr);
	        
	        System.out.println(arr);
	    }
	}

